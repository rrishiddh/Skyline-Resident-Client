import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import login from "../../assets/login.gif";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const { user, userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Successfully Login!",
          text: `Welcome, ${user.displayName}!`,
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        axiosPublic.post("/users", { userName: user.displayName, userEmail: user.email, role: "user" })
          .then(() => {
            Swal.fire({ title: `Welcome, ${user.displayName}!`, icon: "success" });
            navigate("/");
          });
      })
      .catch((error) => {
        setError({ ...error, register: error.code });
      });
  };

  return (
    <div className="min-h-screen w-[90%] mx-auto">
      <div className="justify-center items-center my-10 dark:text-black">
        <h2 className="text-2xl font-semibold text-center mb-6">Login To Your Account</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <img src={login} className="w-[70%] max-sm:w-[50%] mx-auto my-auto" alt="login" />
          <div className="card card-compact bg-slate-50 border-2 w-[70%] max-sm:mx-auto shrink-0 p-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mx-auto">
              
              <button className="btn  dark:text-black bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd]  text-white" onClick={() => { setEmail("admin@gmail.com"); setPassword("Admin123"); }}>Admin Test ID</button>
              <button className="btn  dark:text-black bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd]  text-white" onClick={() => { setEmail("member@gmail.com"); setPassword("Member123"); }}>Member Test ID</button>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label"><span className="label-text">Email</span></label>
                <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Password</span></label>
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered" required />
              </div>
              {error.login && <label className="label text-sm text-red-600">{error.login}</label>}
              <div className="form-control mt-6">
                <button className="btn dark:text-black bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd] ">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn dark:text-black bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] hover:from-[#b9dcdf] hover:to-[#87b9bd]  text-white w-[95%] mx-auto my-4">Sign In With Google</button>
            <p className="text-center text-sm font-semibold">Don&apos;t have an account? <Link to="/auth/register" className="text-blue-500 underline">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
