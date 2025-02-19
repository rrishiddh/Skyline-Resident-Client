import { Link } from "react-router-dom";
import errorPage from "../../assets/errorPage.gif";

const ErrorPage = () => {
  return (
    <div className=" text-center justify-center flex min-h-screen ">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-auto ">
        <div>
          <img className="mx-auto max-md:w-[80%]" src={errorPage} />
        </div>
        <div className="md:my-auto max-sm:mx-auto max-md:w-[80%] max-md:mx-auto" >
          <h2 className="font-bold max-md:text-xl md:text-3xl ">Page Not Found!</h2>
          <Link to="/">
            <button className="btn dark:text-black  mt-5 btn-lg max-sm:text-sm bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] font-semibold rounded-lg">
              Go To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
