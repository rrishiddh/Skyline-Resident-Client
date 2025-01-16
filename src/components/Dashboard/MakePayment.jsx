import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";


const MakePayment = () => {
const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);


  const { data: agreementDetails = {} } = useQuery({
    queryKey: ["agreementDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements/${user?.email}`);
      return res.data;
    },
  });

    
    return (
        <div className="my-6 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3">
        Make Payment
      </h1>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">Make a quick payment to book your apartment!</p>

      <div className="card bg-base-200  shadow-xl w-[70%] md:w-[40%] mx-auto p-4">
        <form  className="grid md:grid-cols-2 grid-cols-1">
          <div className="label">
            <span className="label-text  text-sm font-light">
              Your Email : 
            </span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.userEmail}
          />
    
          <div className="label">
            <span className="label-text text-sm font-light">
              Floor : 
            </span>
          </div>
          <input
            type="number"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.floorNo}
          />

          <div className="label">
            <span className="label-text text-sm font-light">
              Block Name : 
            </span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.blockName}
          />
          
          <div className="label">
            <span className="label-text text-sm font-light">
            Apartment No : 
            </span>
          </div>
          <input
            type="number"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.apartmentNo}
          />
          
          <div className="label">
            <span className="label-text text-sm font-light">
              Rent : 
            </span>
          </div>
          <input
            type="number"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.rent}
          />

          <div className="label">
            <span className="label-text text-sm font-light">
              Month : 
            </span>
          </div>
          <input
            type="month"
            name="month"
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.month || '2025-02'}
          />

          <button className="mt-5 mb-3 btn btn-info md:col-span-2 md:w-[50%] md:mx-auto">Pay Now</button>
        </form>
      </div>
    </div>
    );
};

export default MakePayment;