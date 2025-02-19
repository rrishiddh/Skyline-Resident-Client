import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useMember from "../hooks/useMember";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [isMember] = useMember();


  const { data: agreementDetails = []} = useQuery({
    queryKey: ["agreementDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements/${user?.email}`);
      return res.data;
    },
  });
  const formatDate = (isoDate) => {
    if (!isoDate) {
      return "N/A"; 
    }
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3 tinos"> My Profile</h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Welcome, Mr, {user?.displayName}!
      </p>
      <div>
                 {/* Stat*/}
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto my-6 gap-2 text-center ">
        <div className="stats shadow">
          <div className="stat bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] ">
            <div className="stat-title">Your Floor No.</div>
            <div className="stat-value">{agreementDetails.floorNo || "N/A"}</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] ">
            <div className="stat-title">Your Block No.</div>
            <div className="stat-value">{agreementDetails.blockName || "N/A"}</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] ">
            <div className="stat-title">Your Apartment No.</div>
            <div className="stat-value">{agreementDetails.apartmentNo || "N/A"}</div>
          </div>
        </div>
      </div>
              </div>

      <div className="card card-compact bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] md:w-[60%] mx-auto p-5 items-center flex md:flex-row justify-between ">
        <div className="grid grid-cols-1 gap-4 ">
          <div className="cursor-pointer avatar ring-primary ring-offset-base-100 rounded-full ring ring-offset-2 mx-auto max-md:w-[60%] md:w-40">
            <img
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              className="rounded-full  "
            />
          </div>
          <div className="text-justify mx-auto ">
            <p className="text-sm md:text-lg  mb-2">
              User Name: <span className="font-bold">{user?.displayName}</span>
            </p>
            <p className="text-sm md:text-lg  mb-2">
              User Email: <span className="font-bold">{user?.email}</span>
            </p>
          </div>
        </div>

        <div className="divider md:divider-horizontal w-[50%] mx-auto"></div>

        <div>
          {agreementDetails && agreementDetails.userEmail  && isMember ? (
           <>
              <ul className="text-justify space-y-2 text-sm">
                <li>
                  Agreement Accept Date:{" "}
                  <span className="font-bold">{formatDate(agreementDetails.acceptOrRejectDate) || "N/A"}</span> 
                </li>
                <li>Floor: <span className="font-bold">{agreementDetails.floorNo || "N/A"}</span></li>
                <li>Block: <span className="font-bold">{agreementDetails.blockName || "N/A"}</span></li>
                <li>Apartment No: <span className="font-bold">{agreementDetails.apartmentNo || "N/A"}</span></li>
              </ul>

            </>
          ) : (
            <ul className="text-justify space-y-4 text-sm">
              <li>Agreement Accept Date: <span className="font-bold">N/A</span></li>
              <li>Floor: <span className="font-bold">N/A</span></li>
              <li>Block: <span className="font-bold">N/A</span></li>
              <li>Apartment No.: <span className="font-bold">N/A</span></li>
            </ul>
          )}
        </div>
      </div>
      
     
    </div>
  );
};

export default MyProfile;
