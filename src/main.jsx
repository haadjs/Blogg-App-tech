import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/about";
import Contact from "./Pages/Contact";
import SingleBlog from "./Pages/SingleBlog";
import Home from "./Pages/Home";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Dashboard from "./Pages/Dashboard";

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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
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
