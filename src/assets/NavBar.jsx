import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-[#1b252c] w-full border-b border-gray-700">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* LOGO container */}
        <div className="bg-[#26313A] rounded-r-full px-4 py-2 h-full flex items-center">
          <img src="logo.svg" alt="Logo" className="h-12 w-auto object-contain py-1" />
        </div>

        {/* Right side nav links */}
        <div className="px-6 flex justify-between gap-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm md:text-base ${
                isActive ? "text-red-500" : "text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/sykneski"
            className={({ isActive }) =>
              `text-sm md:text-base ${
                isActive ? "text-red-500" : "text-white"
              }`
            }
          >
            Sykneski
          </NavLink>

          <NavLink
            to="/pravinya"
            className={({ isActive }) =>
              `text-sm md:text-base ${
                isActive ? "text-red-500" : "text-white"
              }`
            }
          >
            Pravinya
          </NavLink>

          <NavLink
            to="/smg"
            className={({ isActive }) =>
              `text-sm md:text-base ${
                isActive ? "text-red-500" : "text-white"
              }`
            }
          >
            SMG Builders &amp; Constructers
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
