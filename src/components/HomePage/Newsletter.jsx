import Swal from "sweetalert2";

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank you for subscribing to our newsletter!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="w-[90%] max-sm:w-[80%] mx-auto">
      <form onSubmit={handleSubscribe}>
        <div className=" my-10  bg-slate-100 py-16 rounded-lg text-center light:text-black outline  outline-offset-8 outline-[#A6E3E9]">
          <h2 className="text-3xl font-bold my-4 tinos dark:text-black">
            Subscribe To Our Newsletter
          </h2>
          <p className="mb-6 text-sm">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex dark:text-black max-sm:flex-col max-sm:w-[70%] max-sm:mx-auto max-sm:gap-4 justify-center">
            <input
              required
              type="email"
              placeholder="your email address..."
              className="input input-bordered input-lg rounded-lg "
            />
            <button className="btn dark:text-black btn-lg max-sm:text-sm bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] font-semibold rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
