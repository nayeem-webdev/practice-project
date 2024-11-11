import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignIn = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Social Login Section */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in with</h2>

        <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          <i className="fab fa-google mr-2"></i> Google
        </button>

        <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          <i className="fab fa-facebook mr-2"></i> Facebook
        </button>

        <button className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
          <i className="fab fa-github mr-2"></i> GitHub
        </button>

        <button className="w-full flex items-center justify-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
          <i className="fab fa-twitter mr-2"></i> Twitter
        </button>
      </div>

      {/* Registration Form */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6"> Sign In using</h2>
        <form>
          <div className="mb-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-2 relative">
            <FaEyeSlash className="absolute right-2 top-3" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <small className="ml-2 text-gray-700">Forgot Password</small>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
