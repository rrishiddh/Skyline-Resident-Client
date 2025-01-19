import { useContext} from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AdminProfile = () => {
      const { user } = useContext(AuthContext);      
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();

      const {user: admin} = useAuth();

      const { data: apartments = [] } = useQuery({
        queryKey: ["apartments"],
        queryFn: async () => {
          const res = await axiosPublic.get("/apartment");
          return res.data;
        },
      });

      const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await axiosSecure.get("/users");
          return res.data;
        },
      });

      const filteredUsers = users.filter(
        (user) => user.role == "user"
      );
      const filteredMembers = users.filter(
        (user) => user.role == "member"
      );
      
      const { data: agreementsAvailable = [] } = useQuery({
        queryKey: ["agreementsAvailable"],
        queryFn: async () => {
          const res = await axiosPublic.get("/agreementsAvailable");
          return res.data;
        },
      });
    return (
        <div className="w-[90%] mx-auto my-6">
            <h2 className="text-center text-2xl font-bold mb-3 tinos"> Admin Profile</h2>
            <p className="mx-auto max-sm:w-[85%] text-center mb-6">Welcome, Mr. {user?.displayName} !</p>

            <div className="card card-compact bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] md:w-[60%] mx-auto p-5   items-center flex md:flex-row justify-between ">
                <div className="grid grid-cols-1 gap-4 ">                
                <div className="cursor-pointer avatar ring-primary ring-offset-base-100  rounded-full ring ring-offset-2 mx-auto w-40"> 
                <img src={user?.photoURL} referrerPolicy="no-referrer" className="rounded-full "/>
                </div>
                <div className="text-justify mx-auto ">
                <p className="max-md:text-sm mb-2">Admin Name : <span className="font-bold">{user?.displayName}</span> </p>
                <p className="max-md:text-sm mb-2">Admin Email : <span className="font-bold">{user?.email}</span></p>
                </div>
                </div>

                <div className="divider md:divider-horizontal w-[50%] mx-auto"></div>

            <div >
                <ul className="text-justify space-y-2 text-sm">
                    <li>Total number of rooms in the database : <span className="font-bold">{apartments.length || "N/A"}</span></li>
                    <li>Percentage of available rooms in the database : <span className="font-bold">{(((apartments.length-agreementsAvailable.length)/apartments.length)*100).toFixed(2) || "N/A"}% </span> </li>
                    <li>Percentage of agreement/unavailable rooms in the database : <span className="font-bold">{((agreementsAvailable.length/apartments.length)*100).toFixed(2) || "N/A"}% </span></li>
                    <li>Number of users in the database :  <span className="font-bold">{filteredUsers.length || "N/A"}</span></li>
                    <li>Number of members in the database:  <span className="font-bold">{filteredMembers.length || "N/A"}</span></li>
                    
                </ul>
            </div>

            </div>


            


            
        </div>
    );
};

export default AdminProfile;