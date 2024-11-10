import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-600 flex justify-center items-center py-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
