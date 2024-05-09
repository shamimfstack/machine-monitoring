import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-full max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
