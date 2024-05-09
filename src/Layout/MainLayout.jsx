import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
            <Outlet />
            </div>
        </div>
        );
}