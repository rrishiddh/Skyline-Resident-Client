import { useContext} from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const AdminProfile = () => {
      const { user } = useContext(AuthContext);      
    
      
    return (
        <div className="w-[90%] mx-auto my-6">
            <h2 className="text-center text-2xl font-bold mb-3"> My Profile</h2>
            <p className="mx-auto max-sm:w-[85%] text-center mb-6">Welcome, Mr, {user?.displayName} !</p>

            <div className="card card-compact bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] md:w-[60%] mx-auto p-5   items-center flex md:flex-row justify-between ">
                <div className="grid grid-cols-1 gap-4 ">                
                <div className="cursor-pointer avatar ring-primary ring-offset-base-100  rounded-full ring ring-offset-2 mx-auto"> 
                <img src={user?.photoURL} referrerPolicy="no-referrer" className="rounded-full "/>
                </div>
                <div className="text-justify mx-auto ">
                <p className="text-sm md:text-lg font-bold mb-2">Admin Name : {user?.displayName}</p>
                <p className="text-sm md:text-lg font-bold mb-2">Admin Email : {user?.email}</p>
                </div>
                </div>

                <div className="divider md:divider-horizontal w-[50%] mx-auto"></div>

            <div >
                <ul className="text-justify font-bold space-y-4 text-sm">
                    <li>Total number of rooms in the database : N/A</li>
                    <li>Percentage of available rooms in the database :  N/A</li>
                    <li>Percentage of agreement/unavailable rooms in the database :  N/A</li>
                    <li>Number of users in the database :  N/A</li>
                    <li>Number of members in the database:  N/A</li>
                    
                </ul>
            </div>

            </div>


            


            
        </div>
    );
};

export default AdminProfile;