import { useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    loginUser,
    signInWithGoogle,
    signInWithTwitter,
    signInWithFacebook,
    signInWithGithub,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error.massage);
      });
  };

  // social Sign in
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  const handleSignInWithTwitter = () => {
    signInWithTwitter()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  const handleSignInWithFacebook = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  return (
    <div className="container mx-auto min-h-[calc(100vh-72px-80px)] flex justify-center items-center">
      <div className="bg-white  p-8 rounded-lg shadow-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {/* Social Login Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in with</h2>

          <button
            onClick={handleSignInWithGoogle}
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-google mr-2"></i> Google
          </button>

          <button
            onClick={handleSignInWithFacebook}
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-facebook mr-2"></i> Facebook
          </button>

          <button
            onClick={handleSignInWithGithub}
            className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </button>

          <button
            onClick={handleSignInWithTwitter}
            className="w-full flex items-center justify-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-twitter mr-2"></i> Twitter
          </button>
        </div>

        {/* Registration Form */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">
            {" "}
            Sign In using
          </h2>
          <form onSubmit={handleSignIn}>
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
    </div>
  );
};

export default SignIn;
