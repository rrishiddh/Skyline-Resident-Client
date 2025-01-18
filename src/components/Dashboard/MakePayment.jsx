import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const MakePayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discountedRent, setDiscountRent] = useState(0);

  const { data: agreementDetails = {} } = useQuery({
    queryKey: ["agreementDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements/${user?.email}`);
      return res.data;
    },
  });

  const handleCouponApply = async () => {
    try {
      const res = await axiosSecure.get(`/coupon?code=${coupon}`);
      const couponData = res.data;
      if (couponData && couponData.available === 'Available') {
        const discountAmount =
          (agreementDetails.rent * couponData.discountPercentage) / 100;
        setDiscountRent(agreementDetails.rent - discountAmount);
        Swal.fire({
          title: "Coupon Applied Successfully!",
          text: `You saved ৳${discountAmount}!`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Invalid Coupon",
          text: "Please enter a valid coupon code.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to apply coupon. Try again later.",
        icon: "error",
      });
    }
  };

  const [selectedMonth, setSelectedMonth] = useState(
    agreementDetails.month || "2025-01"
  );

  const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [err, setErr] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
      const rentAmount =
        discountedRent > 0 ? discountedRent : parseFloat(agreementDetails.rent);

      axiosSecure
        .post("/create-payment-intent", { rent: rentAmount })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating payment intent:", error);
        });
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);
      if (card == null) return;

      // Create PaymentMethod
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
      if (error) {
        console.log("[payment-error]", error);
        setErr(error.message);
      } else {
        console.log("[PaymentMethod]", paymentMethod);
        setErr("");
      }

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmError) {
        console.log("[confirmError]", confirmError);
        setErr(confirmError.message);
      } else {
        console.log("[PaymentIntent]", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          try {
            const { _id, ...previousPaymentData } = agreementDetails;
            const paymentData = {
              ...previousPaymentData,
              coupon,
              discountedRent,
              paymentId: paymentIntent.id,
              month: selectedMonth,
            };

            const res = await axiosSecure.post("/makePayment", paymentData);
            if (res.status === 200) {
              Swal.fire({
                title: "Payment Successful!",
                text: `Transaction ID: ${paymentIntent.id}`,
                icon: "success",
              });
              setIsModalOpen(false);
            }
          } catch (error) {
            console.error("Error processing payment:", error);
            Swal.fire({
              title: "Payment already done!",
              text: "Failed to process payment",
              icon: "info",
            });
          }
        }
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <CardElement className="border-2 bg-white rounded-xl px-2 py-4"
          options={{
            style: {
              base: {
                fontSize: "14px",
                color: "#424770",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="my-2 text-sm text-red-500">{err}</p>
        <div className="justify-end flex">
          <button
            type="submit"
            className="btn btn-info w-full"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="my-6 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3">Make Payment</h1>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Pay your apartment rent from here!
      </p>

      <div className="card bg-base-200  shadow-xl w-[70%] md:w-[40%] mx-auto p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid md:grid-cols-2 grid-cols-1"
        >
          <div className="label">
            <span className="label-text  text-sm font-light">Your Email :</span>
          </div>
          <input
            type="text"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.userEmail}
          />

          <div className="label">
            <span className="label-text text-sm font-light">Floor :</span>
          </div>
          <input
            type="number"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.floorNo}
          />

          <div className="label">
            <span className="label-text text-sm font-light">Block Name :</span>
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
            <span className="label-text text-sm font-light">Rent :</span>
          </div>
          <input
            type="number"
            readOnly
            placeholder="Type here"
            className="input-sm input-bordered w-full "
            defaultValue={agreementDetails.rent}
          />

          <div className="label">
            <span className="label-text text-sm font-light">Month :</span>
          </div>
          <input
            type="month"
            name="month"
            placeholder="Type here"
            className="input-sm input-bordered w-full"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-5 mb-3 btn btn-info md:col-span-2 md:w-[50%] md:mx-auto"
          >
            Pay Now
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black p-5 rounded-md w-[90%] max-w-lg relative">
            <h3 className="text-xl max-sm:text-lg font-bold mb-4">Complete Your Payment</h3>
            <div className="mt-4">
            <div className="label">
            <span className="label-text text-sm ">Enter Coupon Code :</span>
          </div>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-info mt-2 w-full"
                onClick={handleCouponApply}
              >
                Apply Coupon
              </button>
            </div>
            {/* stripe  */}
            <div className="label mt-6">
            <span className="label-text text-sm ">Enter Your Card Details :</span>
          </div>
            <div>
              <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
              </Elements>
            </div>

            <div>
              <button
                className="btn-ghost mr-1 mt-1 absolute top-0 right-0 rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                <img src="https://img.icons8.com/?size=100&id=63688&format=png&color=000000" className="w-10" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakePayment;
