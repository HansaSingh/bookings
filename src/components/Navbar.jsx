import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <div className="absolute w-full flex justify-between  p-4 items-center ">
      <h1 className="text-white text-2xl font-bold z-20">BookNest</h1>
      <HiMenu
        onClick={handleNav}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? "  fixed text-gray-300 top-0 left-0 w-full h-screen flex-col px-4 py-7 z-10  bg-black/90 ease-in duration-500"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className=" w-full h-full fixed flex flex-col items-center justify-center ">
          <a href="Hero.jsx">
            <li className="font-bold text-3xl py-4">Home</li>
          </a>
          <a href="Destinations.jsx">
            <li className="font-bold text-3xl py-4">Destinations</li>
          </a>
          <a href="#">
            <li className="font-bold text-3xl py-4">Reservations</li>
          </a>
          <a href="#">
            <li className="font-bold text-3xl py-4">Amenities</li>
          </a>
          <a href="#">
            <li className="font-bold text-3xl py-4">Rooms</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
