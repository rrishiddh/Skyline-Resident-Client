import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Coupon = () => {
  const axiosPublic = useAxiosPublic();

  const { data: homeCoupon = [] } = useQuery({
    queryKey: ["homeCoupon"],
    queryFn: async () => {
      const res = await axiosPublic.get("/homeCoupon");
      return res.data;
    },
  });

  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3 tinos">Coupon </h1>
      <p className="mx-auto max-sm:w-[85%] max-sm:text-justify text-center mb-6">Experience the perks of living at Skyline Resident with exclusive coupons!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {homeCoupon.map((coupon, idx) => (
        <div key={idx} className="card bg-base-200  shadow-xl">
          <div className="card-body  max-sm:text-center">
            <div className="sm:flex  justify-between ">
                <div>
                <h2 className="text-lg font-semibold uppercase handlee">{coupon.discountPercentage}% Off!</h2>
                <p className="font-thin text-sm">{coupon.couponDescription}</p>
                </div>
                <div className="max-sm:mt-5">
                    <p className="text-xs font-mono">Min.Spend ৳{Math.ceil(coupon.discountPercentage*1.7)}K </p>
                    <p className="mt-2 text-xl font-bold uppercase">{coupon.discountPercentage}% OFF</p>
                </div>

            </div>
            <div className="divider"></div>

            <div className="sm:flex justify-between ">
                <p className=" text-sm">Coupon Code : <span className="text-red-500 text-lg font-bold">{coupon.code}</span> </p>
              <button className="btn-sm max-sm:mt-5">Status : <span className="text-red-500  font-bold ">{coupon.available}</span></button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Coupon;
