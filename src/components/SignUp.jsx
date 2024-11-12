import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error:", error.massage);
      });
  };
  return (
    <div className="container mx-auto min-h-[calc(100vh-72px-80px)] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social Login Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login or Register with
          </h2>

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
          <h2 className="text-2xl font-bold text-center mb-6">Or Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-2">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

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

            <div className="mb-2">
              <input
                type="url"
                id="photoUrl"
                name="photoUrl"
                placeholder="Photo URL"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-2">
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
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">
                  I agree to the Terms and Conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
