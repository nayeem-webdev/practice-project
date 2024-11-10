const LoginPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-80">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mb-3">
        <i className="fab fa-google mr-2"></i> Login with Google
      </button>

      <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-3">
        <i className="fab fa-facebook mr-2"></i> Login with Facebook
      </button>

      <button className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded mb-3">
        <i className="fab fa-github mr-2"></i> Login with GitHub
      </button>

      <button className="w-full flex items-center justify-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
        <i className="fab fa-twitter mr-2"></i> Login with Twitter
      </button>
    </div>
  );
};

export default LoginPage;
