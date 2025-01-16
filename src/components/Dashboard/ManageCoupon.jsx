
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageCoupon = () => {
    const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const [newCoupon, setNewCoupon] = useState({
    code: "",
    discountPercentage: "",
    couponDescription: "",
    available: "",
  });

  const { data: allCoupons = [], refetch } = useQuery({
    queryKey: ["allCoupons"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allCoupons");
      return res.data;
    },
  });

  const handleAddCoupon = async () => {
    try {
      await axiosSecure.post("/allCoupons", newCoupon);
      setShowModal(false);
      refetch(); 
    } catch (error) {
      console.error("Failed to add coupon:", error);
    }
  };

  const handleChangeAvailability = async (id, availability) => {
    try {
      await axiosSecure.patch(`/allCoupons/${id}`, { available: availability });
      refetch();
    } catch (error) {
      console.error("Failed to update availability:", error);
    }
  };

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
            {allCoupons.map((coupon, idx) => (
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
                    onChange={(e) =>
                      handleChangeAvailability(coupon._id, e.target.value)
                    }
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

      <div className="flex justify-end w-[80%] mx-auto">
        <button
        className="btn btn-info mt-4 "
        onClick={() => setShowModal(true)}
      >
        Add New Coupon
      </button>
        </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div  className="bg-white max-sm:p-3 md:p-5 rounded-md w-[90%] max-w-lg">

            <h3 className="text-xl font-bold mb-1">Add New Coupon</h3>
          <div className=" grid grid-col-1 md:grid-cols-2 gap-2 ">
            <div className="form-control mb-1">
              <label className="label text-sm">Coupon Code</label>
              <input
                type="text"
                className="input input-bordered"
                value={newCoupon.code}
                onChange={(e) =>
                  setNewCoupon({ ...newCoupon, code: e.target.value })
                }
              />
            </div>
            <div className="form-control mb-1">
              <label className="label text-sm">Discount Percentage</label>
              <input
                type="number"
                min="1"
                max="100"
                className="input input-bordered"
                value={newCoupon.discountPercentage}
                onChange={(e) =>
                  setNewCoupon({
                    ...newCoupon,
                    discountPercentage: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-control mb-1">
              <label className="label text-sm">Coupon Description</label>
              <input
                className="textarea textarea-bordered"
                value={newCoupon.couponDescription}
                onChange={(e) =>
                  setNewCoupon({
                    ...newCoupon,
                    couponDescription: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="form-control mb-1">
              <label className="label text-sm">Availability</label>
              <select
                className="select select-bordered"
                value={newCoupon.available}
                onChange={(e) =>
                  setNewCoupon({ ...newCoupon, available: e.target.value })
                }
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
            <div className="grid grid-cols-2 md:col-span-2 gap-3 mx-auto" >
              <button
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-info" onClick={handleAddCoupon}>
                Submit
              </button>
            </div>
          </div>
        </div>
        </div>

      )}
    </div>
  );
};

export default ManageCoupon;
