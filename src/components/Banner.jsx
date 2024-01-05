import React from "react";
import bannerImg from "../assets/banner/bannerImg.png";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full h-full">
      <img
        className="w-full h-[90vh] object-cover "
        src="https://images.pexels.com/photos/207489/pexels-photo-207489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full text-white bg-black/60">
        <div
          className="absolute text-xl text-center  md:top-56
        top-[195px]  font-bold left-2 md:left-[20%]"
        >
          <p className="text-xl">Communication Redefined, Contacts Refined</p>
          <p className="mt-4 text-4xl font-bold md:mt-0 lg:text-7xl md:text-5xl text-shadow ">
            {" "}
            Connect <span className="text-Primary">With</span>
          </p>
          <Link to="/addContacts">
            <div className="border-2 md:mt-4 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded-md font-bold py-5 !text-lg hover:border-spacing-2 hover:border-white text-center my-6 hover:bg-Primary border-Primary absolute left-24 md:left-0 mt-10 transition duration-500 ease-in-out">
              Add Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
