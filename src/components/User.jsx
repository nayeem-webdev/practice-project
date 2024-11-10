const User = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">
            User ID: <span className="font-semibold">12345</span>
          </p>
          <p className="text-gray-600">
            Email: <span className="font-semibold">johndoe@example.com</span>
          </p>
        </div>

        <div className="text-center">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
