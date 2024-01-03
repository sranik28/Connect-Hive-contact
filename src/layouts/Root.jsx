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
        <div className="md:min-h-[calc(100vh-100px)]">
          <Outlet />
        </div>
        <Footer />
      </h1>
    </div>
  );
};

export default Root;
