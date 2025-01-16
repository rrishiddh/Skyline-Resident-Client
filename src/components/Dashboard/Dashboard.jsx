import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
    const {  logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogOut = () => {
      logOut().then(() => {
        navigate("/");
      });
    };
  
  // const isMember = false;

  const [isAdmin] = useAdmin();

  const navOption = (
    // <>
    //   {isMember ? (
    //     ""
    //   ) : (
    //     <>
    //       <li>
    //         <NavLink to="/dashboard/profile">My Profile</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/dashboard/announcements">My Announcements</NavLink>
    //       </li>
    //     </>
    //   )}
    // </>

    <>
      {isAdmin ? (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/admin-profile">Admin Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-members">Manage Members</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/make-announcement">Make Announcement</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/agreement-requests">Agreement Requests</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-coupons">Manage Coupons</NavLink>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-info text-xs mx-auto w-full"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard/announcements">Announcements</NavLink>
          </li>
        <li>
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-info text-xs mx-auto w-full"
            >
              Logout
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div>
          <div className="navbar bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black  px-5  max-sm:pb-3 w-full">
            <div className="flex-none ">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 text-lg font-bold">Dashboard</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal text-sm">
                {/* Navbar menu content here */}
                {navOption}
              </ul>
            </div>
          </div>
        </div>

        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black min-h-full w-80 p-4 pt-6 gap-2 text-sm">
          {/* Sidebar content here */}
          {navOption}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
