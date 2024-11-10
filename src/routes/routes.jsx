import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import User from "../components/User";
import UserHome from "../components/UserHome";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <User />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
