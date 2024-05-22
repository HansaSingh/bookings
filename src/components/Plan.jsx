//import React from 'react'
import beach3 from "../assets/beach3.webp";
import beach4 from "../assets/beach4.webp";
import beach5 from "../assets/beach5.webp";
import beach6 from "../assets/beach6.webp";
import beach1 from "../assets/beach1.jpeg";
const Plan = () => {
  return (
    <div className="max-w-[1312px] m-auto py-10 px-4 md:px-20  grid lg:grid-cols-2 gap-4 ">
      {}
      <div className="grid grid-cols-2 grid-rows-6 h-[100vh]">
        <img
          className="row-span-3 object-cover h-full w-full p-2"
          src={beach3}
        />
        <img
          className="row-span-2 object-cover h-full w-full p-2 "
          src={beach4}
        />
        <img
          className="row-span-2 object-cover h-full w-full p-2"
          src={beach5}
        />
        <img
          className="row-span-3 object-cover h-full w-full p-2"
          src={beach6}
        />
        <img
          className="row-span-3 object-cover h-full w-full p-2"
          src={beach1}
        />
      </div>
      {}
      <div className="flex flex-col h-full justify-center ">
        <h3 className="font-bold text-5xl md:text-6xl">Plan Your Next Trip</h3>
        <p className="text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="py-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod numquam
          accusamus illo rem dolor ex vel! Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet.
        </p>

        <div>
          <button className="border-black mx-2 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white hover:shadow-xl ">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
