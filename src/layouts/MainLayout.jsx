// MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-600">
        <Outlet /> {/* Renders child components */}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
