import { Link } from "react-router-dom";

const BannerText = ({ image, text }) => {
    return (
        <div
      className="w-full bg-center bg-cover  h-[25rem] max-sm:h-[35rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-2xl max-sm:text-lg font-semibold text-white lg:text-3x1 w-[70%] mx-auto uppercase">
            {text}
          </h1>

          <br />

          <Link
            to="/apartment"
            className=" px-5 md:py-4 mt-4 text-sm font-medium text-gray-400 capitalize transition w-[70%] mx-auto"
          >
            Experience the Skyline. Discover a world of possibilities at Skyline Resident!
          </Link>
        </div>
      </div>
    </div>
    );
};

export default BannerText;