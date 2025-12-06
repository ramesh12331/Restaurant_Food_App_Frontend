import React from "react";
import { IoSearch } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="bg-[#ff5200] py-6">
      <div className="absolute top-5 left-0 right-0 flex justify-between">
        <img src="Veggies_new.avif" className="w-[12%]" alt="" />
        <img src="Sushi_replace.avif" className="w-[12%]" alt="" />
      </div>

      <div className="pt-10 pb-5 px-4">
        <p
          className="text-center mx-auto font-bold 
     text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
     leading-snug max-w-3xl text-white"
        >
          Order food & groceries. Discover best restaurants. Swiggy it!
        </p>
      </div>

      <div className="text-center">
        <div>
          <label className="input bg-white shadow-md hover:shadow-lg transition rounded-full  px-4 py-3 border border-gray-200 md:w-140">
            <input type="search" required placeholder="Search" className=" outline-none placeholder-gray-400 text-gray-700 bg-transparent" />
            <IoSearch className="size-5" />
          </label>
        </div>
      </div>
      {/* ************* */}
      <div className="flex justify-center">
          <img src="card1.avif" className="w-[25%] h-[25%]" alt="" />
          <img src="card2.avif" className="w-[25%] h-[25%]" alt="" />
          <img src="card3.avif" className="w-[25%] h-[25%]" alt="" />
        </div>
      {/* ************* */}
    </div>
  );
};

export default Hero;
