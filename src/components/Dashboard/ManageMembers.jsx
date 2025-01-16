import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();
  const {user: admin} = useAuth();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRemoveMember = async (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Member Removed!",
          text: "That member is now just a normal user!",
          icon: "success",
        });
        refetch();
      }
    });
  };
  const filteredUsers = users.filter(
    (user) => user.userEmail !== admin.email
  );

  return (
    <div className="w-[90%] mx-auto my-6">
      <h2 className="text-center text-2xl font-bold mb-3"> Manage Members </h2>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">
        Find out all members data from here!
      </p>

      {filteredUsers.length ? (
        <div className="overflow-x-auto w-[90%] mx-auto">
          <table className="table ">
            <thead>
              <tr>
                <th></th>
                <td>User Name</td>
                <td>User Email</td>
                <td>Remove Member</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>
                    <div className="grid grid-cols-1 gap-2 mx-auto my-auto">
                      {user.role == "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          className="btn btn-sm w-[40%]"
                          onClick={() => handleRemoveMember(user._id)}
                        >
                          <img
                            src="https://img.icons8.com/?size=100&id=99940&format=png&color=000000"
                            className="w-3 h-3 rounded-full"
                          />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-xl text-red-500 py-10">
          No Members Available!
        </div>
      )}
    </div>
  );
};

export default ManageMembers;
