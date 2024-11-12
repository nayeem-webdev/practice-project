import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/3 ">
          <span className="font-bold text-xl">FIREBASE</span>
        </div>
        <div className="space-x-4 w-1/3  items-center justify-center flex">
          {user && (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-300 hover:text-white"
              }
            >
              User
            </NavLink>
          )}
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
        </div>
        <div className="flex items-center space-x-4 w-1/3  justify-end">
          <div className="flex items-center space-x-2 gap-2">
            <div className="flex flex-col text-right">
              <span className="text-white">
                {user?.displayName || "Hello!"}
              </span>
              <span className="text-white">{user?.email}</span>
            </div>
            <img
              src={user?.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
