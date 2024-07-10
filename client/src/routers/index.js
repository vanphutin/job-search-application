import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../pages/Header";
import JobDetails from "../components/JobDetails";

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
        ],
      },
    ],
  },
]);
