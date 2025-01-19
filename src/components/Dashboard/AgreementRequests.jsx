import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { data: allAgreements = [], refetch } = useQuery({
    queryKey: ["allAgreements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/agreements");
      return res.data;
    },
  });

  const handleStatusAccept = async (email) => {
    try {
      await axiosSecure.patch(`/agreements/${email}`).then((res) => {
        if (res.data.modifiedCount > 0) {
          axiosSecure.patch(`/users/agreement/${email}`).then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Member Made Successfully!",
                text: "That user is now a member!",
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
    } catch (error) {
      console.error("Failed to update availability:", error);
    }
  };

  const handleStatusReject = async (email) => {
    try {
      await axiosSecure.patch(`/agreements/${email}`).then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Agreement Request Rejected!",
            icon: "success",
          });
          refetch();
        }
      });
    } catch (error) {
      console.error("Failed to update availability:", error);
    }
  };
  const formatDate = (isoDate) => {
    if (!isoDate) {
      return "N/A";
    }
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  return (
    <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3 tinos">
        Agreement Request
      </h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Manage all agreement request from here!
      </p>
      {allAgreements.length ? (
        <div className="overflow-x-auto  mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <td>User Name</td>
                <td>User Email</td>
                <td>Floor No</td>
                <td>Block Name</td>
                <td>Apartment No</td>
                <td>Rent</td>
                <td>Request Date</td>
                <td>Accept</td>
                <td>Reject</td>
              </tr>
            </thead>
            <tbody>
              {allAgreements.map((agreements, idx) => (
                <tr key={agreements._id}>
                  <th>{idx + 1}</th>
                  <td>{agreements.userName}</td>
                  <td>{agreements.userEmail}</td>
                  <td>{agreements.floorNo}</td>
                  <td>{agreements.blockName}</td>
                  <td>{agreements.apartmentNo}</td>
                  <td>{agreements.rent}</td>
                  <td>{formatDate(agreements.requestDate)}</td>
                  <td>
                    <button
                      onClick={() => handleStatusAccept(agreements.userEmail)}
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=41638&format=png&color=000000"
                        className="w-8"
                      />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleStatusReject(agreements.userEmail)}
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=hRIvjOSQ8I0i&format=png&color=000000"
                        className="w-8"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-xl text-red-500 py-10">
          No Agreement Request Found!
        </div>
      )}
    </div>
  );
};

export default AgreementRequests;
