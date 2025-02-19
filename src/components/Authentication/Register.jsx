import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import register from "../../assets/register.gif";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const { user, setUser, createNewUser, updateUserProfile, signInWithGoogle, logOut } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError({ ...error, password: passwordError });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            const userInfo = {
              userName: name,
              userEmail: email,
              role: "user",
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  title: `Welcome, ${name}!`,
                  text: `Register Successfully!`,
                  icon: "success",
                });
                navigate("/");
              }
            });
          })
          .catch((err) => {
            setError({ ...error, register: err.code });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        setError({ ...error, register: errorCode });
      });
  };

  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);

        const userInfo = {
          userName: user.displayName,
          userEmail: user.email,
          role: "user",
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: `Welcome, ${user.displayName}!`,
              text: `Successfully Registered!`,
              icon: "success",
            });
            // logOut();

            navigate("/");
          }else {
            Swal.fire({
              title: `Welcome, ${user.displayName}!`,
              text: `Login Successful!`,
              icon: "success",
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        setError({ ...error, register: errorCode });
      });
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must include at least 1 uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must include at least 1 lowercase letter.";
    }
    return null;
  };

  return (
    <div>
      <div className=" justify-center dark:text-black items-center py-10">
        <h2 className="text-2xl font-semibold  text-center mb-6 ">
          Register Your Account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <img
            src={register}
            className="w-[70%] max-sm:w-[50%] mx-auto my-auto"
          ></img>

          <div className="card card-compact bg-slate-50 border-2 w-[70%] mx-auto shrink-0 p-6">
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo-URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {error.password && (
                <label className="label text-sm text-red-600">
                  {error.password}
                </label>
              )}
              {error.register && (
                <label className="label text-sm text-red-600">
                  {error.register}
                </label>
              )}
              <div className="form-control mt-6">
                <button className="btn max-sm:btn-sm dark:text-black bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] border-blue-400">
                  Register
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <button
              onClick={handelGoogleSignIn}
              className="btn w-[95%] mx-auto dark:text-black max-sm:btn-sm bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd]  border-blue-400  my-4"
            >
              Register With Google
            </button>
            <p className="text-center text-sm font-semibold max-sm:text-sm">
              Already have account?{" "}
              <Link to="/auth/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
