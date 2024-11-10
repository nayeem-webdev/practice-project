import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-xl">MyApp</span>
        </div>
        <div className="space-x-4">
          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/user-home"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
                : "text-gray-300 hover:text-white"
            }
          >
            User Home
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
