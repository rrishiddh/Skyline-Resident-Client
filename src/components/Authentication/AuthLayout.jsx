import { Outlet,  useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useEffect } from "react";

const AuthLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen">
      <p className="py-3 w-11/12 mx-auto"></p>
      <Outlet></Outlet>
      <p className="py-3 w-11/12 mx-auto"></p>
    </div>
  );
};

export default AuthLayout;
