import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <NavLink to="/" style={({ isActive }) => ({ backgroundColor: isActive ? '#71C9CE' : 'transparent', color: 'black' })}>
          <img
            src="https://img.icons8.com/?size=100&id=103103&format=png&color=000000"
            className="w-5 h-5"
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/apartment" style={({ isActive }) => ({ backgroundColor: isActive ? '#71C9CE' : 'transparent', color: 'black' })} >
          <img
            src="https://img.icons8.com/?size=100&id=KsuSWBKCp2X2&format=png&color=000000"
            className="w-5 h-5"
          />
          Apartment
        </NavLink>
      </li>
     
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-gradient-to-r from-[#CBF1F5] to-[#A6E3E9] text-black  px-5  max-sm:pb-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="btn btn-ghost max-sm:btn-sm text-lg max-sm:text-base "
          >
            <img
              className="w-8 h-8 max-sm:hidden"
              src="./src/assets/logo.png"
              alt=""
            />
            Skyline Resident{" "}
          </Link>
        </div>
       

        <div className="navbar-end space-x-2">      
        <ul className="menu menu-horizontal space-x-2 px-1 text-xs hidden lg:flex">
            {navOption}
          </ul>
          <figure className="cursor-pointer avatar ring-slate-400 ring-offset-base-100 w-8 rounded-full ring ring-offset-1">

       <img src="https://img.icons8.com/?size=100&id=24220&format=png&color=000000" className="w-6 " />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
