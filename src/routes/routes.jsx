import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import User from "../components/User";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <User />
          </PrivateRoutes>
        ),
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
