import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { VscVerifiedFilled } from "react-icons/vsc";

const User = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("user Signed out");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div className="container mx-auto min-h-[calc(100vh-72px-80px)] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-6 gap-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Email:{" "}
            <span className="font-semibold flex items-center justify-center gap-1">
              {user?.email}{" "}
              {user?.emailVerified && (
                <VscVerifiedFilled className="text-blue-500" />
              )}
            </span>
          </p>
          <p className="text-gray-600">
            Provider ID:{" "}
            <span className="font-semibold">
              {user?.providerData[0]?.providerId}
            </span>
          </p>
        </div>

        <div className="text-center flex gap-4">
          <button
           
            className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none"
          >
            Update Profile
          </button>
          <button
            onClick={handleSignOut}
            className="w-full bg-red-800 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
