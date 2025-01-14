import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

const AuthLayout = () => {
      const {user } = useContext(AuthContext);
      console.log(user)
      const navigate = useNavigate();
      if(user?.email){
        return navigate(location?.state ? location.state : "/") 
      }
    
    return (
        <div className="min-h-screen">
            <p className="py-3 w-11/12 mx-auto">
            </p>
            <Outlet></Outlet>
            <p className="py-3 w-11/12 mx-auto">
            </p>
        </div>
    );
};

export default AuthLayout;