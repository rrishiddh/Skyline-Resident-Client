import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/makePayment/${user?.email}` , {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      return res.data;
    },
  });

  return (
    <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3 tinos">Payment History</h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Checkout your previous payments from here!
      </p>
      {paymentHistory.length ? (
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
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment._id} className="hover">
                  <td>{payment.apartmentNo || "N/A"}</td>
                  <td>{payment.blockName || "N/A"}</td>
                  <td>{payment.floorNo || "N/A"}</td>
                  <td>{payment.paymentId || "N/A"}</td>
                  <td>{payment.month || "N/A"}</td>
                  <td>{payment.rent || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-xl text-red-500 py-10">
          No Payment Data Available!
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
