import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/HomePage/Home";
import AuthLayout from "../components/Authentication/AuthLayout";
import LogIn from "../components/Authentication/LogIn";
import Register from "../components/Authentication/Register";
import Apartment from "../components/Apartment/Apartment";
import Dashboard from "../components/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../components/Dashboard/MyProfile";
import Announcements from "../components/Dashboard/Announcements";
import ManageMembers from "../components/Dashboard/ManageMembers";
import AdminRoute from "./AdminRoute";
import AdminProfile from "../components/Dashboard/AdminProfile";
import MakeAnnouncement from "../components/Dashboard/MakeAnnouncement";
import ManageCoupon from "../components/Dashboard/ManageCoupon";
import AgreementRequests from "../components/Dashboard/AgreementRequests";
import MakePayment from "../components/Dashboard/MakePayment";
import PaymentHistory from "../components/Dashboard/PaymentHistory";

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
              path: "login",
              element: <LogIn></LogIn>,
            },
            {
              path: "register",
              element: <Register></Register>,
            },
          ],
        },       
      ]
    },
    {
      path : "dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children :[
        // user 
        {
          path: 'profile',
          element: <MyProfile></MyProfile>,
        },
        {
          path: 'announcements',
          element: <Announcements></Announcements>,
        },
        // member 
        {
          path: 'make-payment',
          element: <MakePayment></MakePayment>,
        },
        {
          path: 'payment-history',
          element: <PaymentHistory></PaymentHistory>,
        },
        // admin route 
        {
          path: 'admin-profile',
          element: <AdminRoute><AdminProfile></AdminProfile> </AdminRoute>,
        },
        {
          path: 'manage-members',
          element: <AdminRoute><ManageMembers></ManageMembers></AdminRoute>,
        },
        {
          path: 'make-announcement',
          element: <AdminRoute><MakeAnnouncement></MakeAnnouncement></AdminRoute>,
        },
        {
          path: 'agreement-requests',
          element: <AdminRoute><AgreementRequests></AgreementRequests></AdminRoute>,
        },
        {
          path: 'manage-coupons',
          element: <AdminRoute><ManageCoupon></ManageCoupon></AdminRoute>,
        },
      ]
    }
  ]);

export default router;