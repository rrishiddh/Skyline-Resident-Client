import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import register from "../../assets/register.gif";

const Register = () => {
  const { setUser, createNewUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

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
            Swal.fire({
              title: "Successfully Register!",
              text: `Welcome ${user.displayName}!`,
              icon: "success",
            });
            navigate("/");
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
        Swal.fire({
          title: "Successfully Register!",
          text: `Welcome ${user.displayName}!`,
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
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
      <div className=" justify-center bg-white items-center py-10">
        <h2 className="text-2xl font-semibold pt-2 text-center mb-6 ">
          Register Your Account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <img src={register} className="w-[70%] max-sm:w-[50%] mx-auto my-auto"></img>

          <div className="card card-compact bg-slate-50 border-2 w-[70%] max-sm:mx-auto shrink-0 p-6">
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
                <button className="btn max-sm:btn-sm bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] border-blue-400">
                  Register
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <button
              onClick={handelGoogleSignIn}
              className="btn w-[95%] mx-auto max-sm:btn-sm bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd]  border-blue-400  my-4"
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
