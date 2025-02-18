import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
  const navOption = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}
        >
          <img
            src="https://img.icons8.com/?size=100&id=103103&format=png&color=000000"
            className="w-5 h-5"
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apartment"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}
        >
          <img
            src="https://img.icons8.com/?size=100&id=KsuSWBKCp2X2&format=png&color=000000"
            className="w-5 h-5"
          />
          Apartment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/announcements&other"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}
        >
          <img
            src="https://img.icons8.com/?size=100&id=WCf4kcsJ1PWW&format=png&color=000000"
            className="w-5 h-5"
          />
          Announcements
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className=" bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black  ">
        <div className=" navbar w-[92%] mx-auto max-sm:pb-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow text-xs"
              >
                {navOption}
              </ul>
            </div>

            <Link
              to={"/"}
              className="flex items-center gap-2 text-lg max-sm:text-base handlee"
            >
              <img
                className="w-10 max-sm:hidden"
                src="https://img.icons8.com/?size=100&id=9ECnYpBa4VDd&format=png&color=000000"
                alt=""
              />
              Skyline <br className="md:hidden" /> Resident{" "}
            </Link>
          </div>

          <div className="navbar-end space-x-2">
            <ul className="menu menu-horizontal px-1 text-xs hidden lg:flex">
              {navOption}
            </ul>
            {user && user?.email ? (
              <div className="dropdown dropdown-hover dropdown-left ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost  btn-circle avatar "
                >
                  <div className=" cursor-pointer avatar ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src={user?.photoURL} referrerPolicy="no-referrer" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 space-y-2 shadow mt-6"
                  >
                    <p className="text-xs text-red-400 uppercase">
                      Welcome, {user?.displayName}!
                    </p>
                    {user && isAdmin && (
                      <li>
                        <Link to="dashboard/admin-profile">Dashboard</Link>
                      </li>
                    )}
                    {user && !isAdmin && (
                      <li>
                        <Link to="dashboard/profile">Dashboard</Link>
                      </li>
                    )}
                    <li>
                    <Link to="faq">User Guide & FAQs</Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-sm text-xs  bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to={"/auth/login"}
                className="cursor-pointer avatar ring-slate-400 ring-offset-base-100 w-8 rounded-full ring ring-offset-1"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=24220&format=png&color=000000"
                  className="w-6 "
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
