import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    createUser,
    addDetails,
    user,
    signInWithGoogle,
    signInWithTwitter,
    signInWithFacebook,
    signInWithGithub,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/");
      return;
    }

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const terms = e.target.terms.checked;

    console.log(name, email, terms);

    createUser(email, password)
      .then(() => {
        const profile = { displayName: name, photoURL: photoUrl };

        addDetails(profile)
          .then(() => {
            console.log("Profile updated successfully");
          })
          .catch((error) => {
            console.log("Profile update failed:", error.message);
          });

        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  // Social Login
  const handleSignUpWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.massage));
  };
  const handleSignUpWithFacebook = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.massage));
  };
  const handleSignUpWithGithub = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.massage));
  };
  const handleSignUpWithTwitter = () => {
    signInWithTwitter()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.massage));
  };
  return (
    <div className="container mx-auto min-h-[calc(100vh-72px-80px)] flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in with</h2>

          <button
            onClick={handleSignUpWithGoogle}
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-google mr-2"></i> Google
          </button>

          <button
            onClick={handleSignUpWithFacebook}
            className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-facebook mr-2"></i> Facebook
          </button>

          <button
            onClick={handleSignUpWithGithub}
            className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </button>

          <button
            onClick={handleSignUpWithTwitter}
            className="w-full flex items-center justify-center bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            <i className="fab fa-twitter mr-2"></i> Twitter
          </button>
        </div>

        {/* Sign-Up Form */}
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

            <div className="mb-2 relative">
              <FaEyeSlash className="absolute right-2 top-3 cursor-pointer" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-2">
              <p className="text-red-500">At least 8 characters long</p>
              <p className="text-red-500">
                At least one uppercase letter (A-Z)
              </p>
              <p className="text-red-500">
                At least one lowercase letter (a-z)
              </p>
              <p className="text-red-500">Include at least one number (0-9)</p>
              <p className="text-red-500">
                At least one special character (!, @, #, $, %)
              </p>
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  required
                />
                <span className="ml-2 text-gray-700 text-[11px]">
                  I agree to the{" "}
                  <span className="text-blue-600 hover:underline hover:text-blue-700">
                    Terms and Conditions
                  </span>
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
