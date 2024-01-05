import React from "react";
import bannerImg from "../assets/banner/bannerImg.png";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 20 }}
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/207489/pexels-photo-207489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
        className="bg-cover md:bg-no-repeat md:h-screen md:w-full h-96"
      >
        <div className="flex items-center h-[400px] md:h-screen bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
          <div className="flex flex-col justify-center w-full h-full px-6 mt-20 text-white md:mt-0 md:w-1/2 bg-gradient-to-r from-slate-950">
            <div className="w-1/2 px-6 py-4 font-bold text-white rounded-lg lg:text-2xl sm:text-xl lg:w-1/2 md:w-1/2">
              Dream Gaming Website
            </div>
            <div
              div
              className="text-3xl font-bold lg:text-7xl sm:text-3xl md:text-4xl text-shadow "
            >
              Connect With
            </div>

            <div className="my-3 text-xl lg:text-xl text-white-500">
              Conquer the TitanArena: Gaming Glory Awaits!
            </div>
            <Link to="/addContacts">
              <div className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-Primary border-Primary transition duration-500 ease-in-out">
                Add Contact
              </div>
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
