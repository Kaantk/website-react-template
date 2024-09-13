import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "~/layouts/Admin/AdminLayout";
import { PublicLayout } from "~/layouts/Public/PublicLayout";
import { Dashboard } from "~/pages/Admin/Dashboard";
import { Login } from "~/pages/Admin/Login";
import { Settings } from "~/pages/Admin/Settings";
import { Users } from "~/pages/Admin/Users";
import { NotFound } from "~/pages/Common/NotFound";
import { About } from "~/pages/Public/About";
import { Contact } from "~/pages/Public/Contact";
import { Home } from "~/pages/Public/Home";

export const router = createBrowserRouter([
  {
    path: "admin/login",
    element: <Login />,
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
