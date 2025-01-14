const Coupon = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3">Coupon </h1>
      <p className="mx-auto max-sm:w-[80%] text-center mb-6">Experience the perks of living at Skyline Resident with exclusive coupons!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="card bg-base-200  shadow-xl">
          <div className="card-body ">
            <div className="flex justify-between ">
                <div>
                <h2 className="card-title uppercase">10% Off!</h2>
                <p className="font-thin text-sm">Only for previous members!</p>
                </div>
                <div >
                    <p className="text-xs font-mono">Over ৳16K </p>
                    <p className="mt-2 text-xl font-bold uppercase">10% OFF</p>
                </div>

            </div>
            <div className="divider"></div>

            <div className="flex justify-between ">
                <p className=" text-sm">Validity Period : <span className="text-red-500 text-lg font-bold">31-Dec-2025</span> </p>
              <button className="btn btn-info">Avail Now</button>
            </div>
          </div>
        </div>
        {/* 2nd card  */}
        <div className="card bg-base-200  shadow-xl">
          <div className="card-body ">
            <div className="flex justify-between ">
                <div>
                <h2 className="card-title uppercase">8% Off!</h2>
                <p className="font-thin text-sm">Only for new members!</p>
                </div>
                <div >
                    <p className="text-xs font-mono">Over ৳10K </p>
                    <p className="mt-2 text-xl font-bold uppercase">8% OFF</p>
                </div>

            </div>
            <div className="divider"></div>

            <div className="flex justify-between ">
                <p className=" text-sm">Validity Period : <span className="text-red-500 text-lg font-bold">26-May-2026</span> </p>
              <button className="btn btn-info">Avail Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
