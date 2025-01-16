import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";
import useMember from "../components/hooks/useMember";

const MemberRoute = ({children}) => {
    const {user, loading} = useAuth(); 
    const [isMember, isMemberLoading] = useMember();
    const location = useLocation();

    if(loading || isMemberLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isMember) {
        return children;
    }
    return <Navigate to="/auth/login" state={{from: location}} replace></Navigate>
};

export default MemberRoute;