import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/HomePage/Home";
import AuthLayout from "../components/Authentication/AuthLayout";
import LogIn from "../components/Authentication/LogIn";
import Register from "../components/Authentication/Register";
import Apartment from "../components/Apartment/Apartment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/apartment",
          element: <Apartment></Apartment>,
        },
        {
          path: "auth",
          element: <AuthLayout></AuthLayout>,
          children: [
            {
              path: "/auth/login",
              element: <LogIn></LogIn>,
            },
            {
              path: "/auth/register",
              element: <Register></Register>,
            },
          ],
        },       
      ]
    }
  ]);

export default router;