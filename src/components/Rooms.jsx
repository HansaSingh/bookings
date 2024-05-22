//import React from "react";
import room1 from "../assets/room1.avif";
import room2 from "../assets/room2.webp";
import room3 from "../assets/room3.avif";
const Rooms = () => {
  return (
    <div className=" max-w-[1312] m-auto bg-blue-100 h-[450px] lg:mb-[20%] md:mb-[35%]  px-5 pt-16 grid grid-cols-2  ">
      <div className=" lg:top-20  relative   lg:col-span-1 col-span-2 py-4">
        <h1 className="text-3xl font-bold  pb-4">Find Interior Rooms</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit nesciunt
          facere odio nisi dolor itaque unde placeat iure, earum facilis.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:col-span-1 col-span-2 gap-1">
        <img className="object-cover " src={room1} />
        <img className="row-span-2 w-full h-full  object-cover " src={room2} />
        <img className="object-cover  " src={room3} />
      </div>
    </div>
  );
};

export default Rooms;
