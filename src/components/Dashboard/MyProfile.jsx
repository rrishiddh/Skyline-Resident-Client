import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: agreementDetails = []} = useQuery({
    queryKey: ["agreementDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3"> My Profile</h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Welcome, Mr, {user?.displayName}!
      </p>

      <div className="card card-compact bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] md:w-[60%] mx-auto p-5 items-center flex md:flex-row justify-between ">
        <div className="grid grid-cols-1 gap-4 ">
          <div className="cursor-pointer avatar ring-primary ring-offset-base-100 rounded-full ring ring-offset-2 mx-auto">
            <img
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              className="rounded-full "
            />
          </div>
          <div className="text-justify mx-auto ">
            <p className="text-sm md:text-lg font-bold mb-2">
              User Name: {user?.displayName}
            </p>
            <p className="text-sm md:text-lg font-bold mb-2">
              User Email: {user?.email}
            </p>
          </div>
        </div>

        <div className="divider md:divider-horizontal w-[50%] mx-auto"></div>

        <div>
          {agreementDetails && agreementDetails.userEmail ? (
           <>
              <ul className="text-justify font-bold space-y-4 text-sm">
                <li>
                  Agreement Accept Date:{" "}
                  {agreementDetails.agreementAcceptDate || "N/A"}
                </li>
                <li>Floor: {agreementDetails.floorNo || "N/A"}</li>
                <li>Block: {agreementDetails.blockName || "N/A"}</li>
                <li>Apartment No.: {agreementDetails.apartmentNo || "N/A"}</li>
              </ul>
            </>
          ) : (
            <ul className="text-justify font-bold space-y-4 text-sm">
              <li>Agreement Accept Date: N/A</li>
              <li>Floor: N/A</li>
              <li>Block: N/A</li>
              <li>Apartment No.: N/A</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
