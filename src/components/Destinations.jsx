import React from "react";
import beach1 from "../assets/beach1.jpeg";
import beach4 from "../assets/beach4.webp";
import beach12 from "../assets/beach12.jpeg";
import beach11 from "../assets/beach11.jpeg";

const Destinations = () => {
  return (
    <>
      <div className="text-3xl font-bold my-5 mx-5 ">Destinations</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-3 flex space-between ">
        <div className="flex flex-row">
          <div className="max-w-[250px] h-[320px] rounded overflow-hidden shadow-lg mx-5">
            <img className="h-[170px] w-[250px] p-4" src={beach1}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">GOA</div>
              <p className="text-gray-700 text-base">
                “Where the sand, and sea create memories.”
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
          <div className="max-w-[250px] h-[320px] rounded overflow-hidden shadow-lg mx-5">
            <img className="h-[170px] w-[250px] p-4" src={beach12}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">GOKARNA</div>
              <p className="text-gray-700 text-base">
                “Escape the city and embrace the waves of Gokarna
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
        </div>
        <div className="flex flex-row  ">
          <div className="max-w-[250px] h-[320px] rounded overflow-hidden shadow-lg mx-5 ">
            <img className="h-[170px] w-[250px] p-4" src={beach11}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">MALDIVES</div>
              <p className="text-gray-700 text-base">
                where the world fades, and the soul comes alive.”
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
          <div className="max-w-[250px] h-[320px] rounded overflow-hidden shadow-lg mx-5 ">
            <img className="h-[170px] w-[250px] p-4" src={beach4}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">KERALA</div>
              <p className="text-gray-700 text-base">
                “don’t need therapy, just a ticket to Kerala.”
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Destinations;
