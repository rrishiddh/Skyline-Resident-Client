import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const announcement = {
      category: data.category,
      title: data.title,
      description: data.description,
    };
    const res = await axiosSecure.post("/announcement", announcement);
    if (res.data.insertedId) {
      Swal.fire({
        title: `Posted Successfully!`,
        icon: "success",
      });
    }
  };

  return (
    <div className="my-6 w-[90%] mx-auto">
      <h1 className="text-center text-2xl font-bold mb-3">
        Make An Announcement
      </h1>
      <p className="mx-auto max-sm:w-[85%] text-center mb-6">Here ou can write a post, which will be valuable for members or users!</p>

      <div className="card bg-base-200  shadow-xl w-[70%] md:w-[50%] mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="label">
            <span className="label-text  text-sm font-light">
              Select A Category
            </span>
          </div>
          <select
            defaultValue={"Apartment"}
            className="select select-bordered w-full "
            {...register("category")}
          >
            <option value="Apartment">Apartment</option>
            <option value="Meeting">Meeting</option>
            <option value="News">News</option>
          </select>
          <div className="label">
            <span className="label-text text-sm font-light">
              Write a title for the announcement
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            {...register("title", { required: true })}
          />

          <div className="label">
            <span className="label-text text-sm font-light">
              Write in details
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            {...register("description", { required: true })}
          />
          <button className="my-3 btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
