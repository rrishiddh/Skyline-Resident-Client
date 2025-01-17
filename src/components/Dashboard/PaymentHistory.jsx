import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  

  const { data: allPayments = {} } = useQuery({
    queryKey: ["allPayments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/makePayment/${user?.email}`);
      return res.data;
    },
  });
console.log(allPayments)

    return (
        <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3">Payment History</h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Checkout your previous payments from here!
      </p>

    
      <div className="overflow-x-auto  mx-auto">
        <table className="table">
          <thead>
            <tr>
              <td>Apartment No</td>
              <td>Block Name</td>
              <td>Floor No</td>
              <td>Payment ID</td>
              <td>Month</td>
              <td>Rent</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td>{allPayments.apartmentNo || "N/A"}</td>
                <td>{allPayments.blockName  || "N/A"}</td>
                <td>{allPayments.floorNo  || "N/A"}</td>
                <td>{allPayments.paymentId  || "N/A"}</td>
                <td>{allPayments.month  || "N/A"}</td>
                <td>{allPayments.rent  || "N/A"}</td>
                <td>{allPayments.status  || "N/A"}</td>
                
              </tr>
          </tbody>
        </table>
    
      </div>
      
    </div>
    );
};

export default PaymentHistory;