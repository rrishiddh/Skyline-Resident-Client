import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div >
            <p className="py-3 w-11/12 mx-auto">
            </p>
            <Outlet></Outlet>
            <p className="py-3 w-11/12 mx-auto">
            </p>
        </div>
    );
};

export default AuthLayout;