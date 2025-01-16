
const PaymentHistory = () => {
    return (
        <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3">Manage Coupons</h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Manage all coupons from here!
      </p>

    
      <div className="overflow-x-auto  mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <td>Coupon Code</td>
              <td>Discount Percentage</td>
              <td>Coupon Description</td>
              <td>Availability</td>
              <td>Change Availability</td>
            </tr>
          </thead>
          <tbody>
            {/* {allCoupons.map((coupon, idx) => ( */}
              <tr key={coupon._id}>
                <th>{idx + 1}</th>
                <td>{coupon.code}</td>
                <td>{coupon.discountPercentage}%</td>
                <td>{coupon.couponDescription}</td>
                <td>{coupon.available}</td>
                <td>
                  <select
                    className="select select-bordered"
                    value={coupon.available}
                   
                  >
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
      </div>
      
    </div>
    );
};

export default PaymentHistory;