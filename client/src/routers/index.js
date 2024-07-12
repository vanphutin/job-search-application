import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../pages/Header";
import JobDetails from "../components/JobDetails";
import Admin from "../components/Admin/Admin";
import User from "../components/User/User";

const AuthLayout = () => {
  return <Outlet />;
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { element: <Home />, path: "/" },
      {
        element: <Header />,
        children: [
          {
            path: "/detail/:id",
            element: <JobDetails />,
          },
          {
            path: "/admin",
            element: <Admin />,
          },
          {
            path: "/user",
            element: <User />,
          },
        ],
      },
    ],
  },
]);
