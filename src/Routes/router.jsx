import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Errorpage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router;