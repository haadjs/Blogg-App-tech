import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar ";
import Fotter from "./Components/Fotter";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  );
};

export default Layout;
