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
                className="menu menu-sm dropdown-content bg-sky-100 rounded-box z-[1] mt-3 w-52 p-2  shadow text-xs"
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
                 {/* dark  mode*/}

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
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
