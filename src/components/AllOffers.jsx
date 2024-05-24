import React from "react";
import beach10 from "../assets/beach10.jpeg";

import beach7 from "../assets/beach7.jpeg";
import beach8 from "../assets/beach8.jpeg";
import beach9 from "../assets/beach9.jpeg";

const AllOffers = () => {
  return (
    <>
      <div className="text-3xl font-bold my-10 mx-5 ">Offers</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-3 flex space-between ">
        <div className="flex flex-row">
          <div className="max-w-[250px] h-[320px] rounded overflow-hidden shadow-lg mx-5">
            <img className="h-[170px] w-[250px] p-4" src={beach10}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">
                FOR UNIQUE &MEMORABLE SUMMER GETAWAYS:
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
          <div className="max-w-[250px] h-[320px] rounded overflow-hidden shadow-lg mx-5">
            <img className="h-[170px] w-[250px] p-4" src={beach7}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">
                ENJOY WEEK-LONG THRILLING SALE:
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
        </div>
        <div className="flex flex-row  ">
          <div className="max-w-[250px] h-[320px] rounded  overflow-hidden shadow-lg mx-5">
            <img className="h-[170px] w-[250px] p-4" src={beach8}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">
                ENJOY FLAT 15% OFF* ON DUTY-FREE SHOPPING
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
          <div className="max-w-[250px] h-[320px] rounded   overflow-hidden shadow-lg mx-5 ">
            <img className="h-[170px] w-[250px] p-4" src={beach9}></img>
            <div className="px-4 py-2">
              <div className="font-bold text-xl mb-2">GRAB UP TO 35% OFF* </div>
              <p className="text-gray-700 text-base"></p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default AllOffers;
