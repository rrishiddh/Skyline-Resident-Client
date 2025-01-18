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
      <h1 className="text-center text-2xl font-bold mb-3">Coupon </h1>
      <p className="mx-auto max-sm:w-[85%] max-sm:text-justify text-center mb-6">Experience the perks of living at Skyline Resident with exclusive coupons!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {homeCoupon.map((coupon, idx) => (
        <div key={idx} className="card bg-base-200  shadow-xl">
          <div className="card-body ">
            <div className="flex justify-between ">
                <div>
                <h2 className="card-title uppercase">{coupon.discountPercentage}% Off!</h2>
                <p className="font-thin text-sm">{coupon.couponDescription}</p>
                </div>
                <div >
                    <p className="text-xs font-mono">Min.Spend ৳{Math.ceil(coupon.discountPercentage*2.4)}K </p>
                    <p className="mt-2 text-xl font-bold uppercase">{coupon.discountPercentage}% OFF</p>
                </div>

            </div>
            <div className="divider"></div>

            <div className="flex justify-between ">
                <p className=" text-sm">Coupon Code : <span className="text-red-500 text-lg font-bold">{coupon.code}</span> </p>
              <button className="btn-sm">Status : <span className="text-red-500  font-bold">{coupon.available}</span></button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Coupon;
