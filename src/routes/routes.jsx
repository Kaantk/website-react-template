import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "~/layouts/Admin/AdminLayout";
import { PublicLayout } from "~/layouts/Public/PublicLayout";
import { AdminLogin } from "~/pages/Admin/AdminLogin";
import { Dashboard } from "~/pages/Admin/Dashboard";
import { Settings } from "~/pages/Admin/Settings";
import { Users } from "~/pages/Admin/Users";
import { NotFound } from "~/pages/Common/NotFound";
import { About } from "~/pages/Public/About";
import { Contact } from "~/pages/Public/Contact";
import { Home } from "~/pages/Public/Home";
import { UserLogin } from "~/pages/Public/UserLogin";
import { UserRegister } from "~/pages/Public/UserRegister";

export const router = createBrowserRouter([
  {
    path: "admin/login",
    element: <AdminLogin />,
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <UserLogin />,
      },
      {
        path: "register",
        element: <UserRegister />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
