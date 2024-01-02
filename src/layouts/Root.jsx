import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// import NavBarr from "../components/NavBarr";

const Root = () => {
  return (
    <div>
      <h1>
        <NavBar />
        <Outlet />
        <Footer />
      </h1>
    </div>
  );
};

export default Root;
