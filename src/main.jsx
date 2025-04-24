import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Pages/Contact";
import SingleBlog from "./Pages/SingleBlog";
import Home from "./Pages/Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "log",
        element: <Login />,
      },
      {
        path: "sign",
        element: <Signup />,
      },
      {
        path: "dash",
        element: <Dashboard />,
      },
      {
        path: "blog/:id",
        element: <SingleBlog />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
