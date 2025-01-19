import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Authentication/AuthProvider";
import { useContext } from "react";
import useMember from "../hooks/useMember";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };

  const [isAdmin] = useAdmin();
  const [isMember] = useMember();

  const navOption = (
    <>
      {isAdmin ? (
        <>
          <li>
            <NavLink to="/" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/admin-profile" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Admin Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-members" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Manage Members</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/make-announcement" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>
              Make Announcement
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/agreement-requests" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>
              Agreement Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-coupons" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Manage Coupons</NavLink>
          </li>
        </>
      ) : (
        <>
          {isMember ? (
            <>
              <li>
                <NavLink to="/" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/make-payment" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Make payment</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Announcements</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/announcements" className='text-xs' style={({ isActive }) => ({
            backgroundColor: isActive ? "#71C9CE" : "transparent",
            color: "black",
          })}>Announcements</NavLink>
              </li>
            </>
          )}
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
            <div className="mx-2 flex-1 px-2 text-lg font-bold handlee">
              Dashboard
            </div>
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
        <ul className="menu bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black min-h-full max-sm:w-40 w-60 p-4 pt-10 gap-2 text-sm z-10">
          {/* Sidebar content here */}
          <div className="mx-2 px-2 text-lg font-bold handlee">
              Dashboard
            </div>
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="btn btn-square btn-ghost absolute top-1 right-0 "
          >
            <img
              src="https://img.icons8.com/?size=100&id=63688&format=png&color=000000"
              className="w-10"
            />
          </label>
          {navOption}
          <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-ghost  mx-auto ml-1"
                >
                  Logout
                </button>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
