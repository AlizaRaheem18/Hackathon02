import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="w-full bg-[#F6F7F9] py-10 px-4 lg:px-16">
      {/* Top Section with Cards */}
      <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-6">
        {/* Left Card */}
        <div className="w-full lg:w-[48%] bg-[#54A6FF] rounded-lg p-6 flex flex-col">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            The Best Platform for Car Rental
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mb-6">
            Ease of doing a car rental safely and reliably. Of course, at a low
            price.
          </p>
          <button className="bg-[#3563E9] text-white py-2 px-4 rounded-lg self-start">
            Rental Car
          </button>
          <div className="mt-4 flex justify-center">
            <Image
              src="/image 7.png"
              alt="Car 1"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-[48%] bg-[#3563E9] rounded-lg p-6 flex flex-col">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Easy way to rent a car at a low price
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mb-6">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <button className="bg-[#54A6FF] text-white py-2 px-4 rounded-lg self-start">
            Rental Car
          </button>
          <div className="mt-4 flex justify-center">
            <Image
              src="/image 8.png"
              alt="Car 2"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Pick-Up and Drop-Off Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-10">
        {/* Pick-Up Section */}
        <div className="w-full lg:w-[45%] bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="trip-type"
              id="pickup"
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="pickup" className="font-semibold text-lg">
              Pick - Up
            </label>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[48%] flex-1">
              <label className="font-semibold mb-2 block">Locations</label>
              <div className="flex items-center border rounded px-3 py-2">
                <p className="text-gray-400 flex-1">Select your city</p>
                <MdKeyboardArrowDown className="text-lg" />
              </div>
            </div>
            <div className="w-full md:w-[48%] flex-1">
              <label className="font-semibold mb-2 block">Date</label>
              <div className="flex items-center border rounded px-3 py-2">
                <p className="text-gray-400 flex-1">Select your date</p>
                <MdKeyboardArrowDown className="text-lg" />
              </div>
            </div>
            <div className="w-full md:w-[48%] flex-1">
              <label className="font-semibold mb-2 block">Time</label>
              <div className="flex items-center border rounded px-3 py-2">
                <p className="text-gray-400 flex-1">Select your time</p>
                <MdKeyboardArrowDown className="text-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Icon Section */}
        <div className="w-full lg:w-auto flex items-center justify-center">
          <LuArrowDownUp className="text-3xl text-white bg-[#3563E9] border border-[#3563E9] rounded shadow-md cursor-pointer p-2" />
        </div>

        {/* Drop-Off Section */}
        <div className="w-full lg:w-[45%] bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center mb-4">
            <input type="radio" name="trip-type" id="dropoff" className="mr-2" />
            <label htmlFor="dropoff" className="font-semibold text-lg">
              Drop - Off
            </label>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-[48%] flex-1">
              <label className="font-semibold mb-2 block">Locations</label>
              <div className="flex items-center border rounded px-3 py-2">
                <p className="text-gray-400 flex-1">Select your city</p>
                <MdKeyboardArrowDown className="text-lg" />
              </div>
            </div>
            <div className="w-full md:w-[48%] flex-1">
              <label className="font-semibold mb-2 block">Date</label>
              <div className="flex items-center border rounded px-3 py-2">
                <p className="text-gray-400 flex-1">Select your date</p>
                <MdKeyboardArrowDown className="text-lg" />
              </div>
            </div>
            <div className="w-full md:w-[48%] flex-1">
              <label className="font-semibold mb-2 block">Time</label>
              <div className="flex items-center border rounded px-3 py-2">
                <p className="text-gray-400 flex-1">Select your time</p>
                <MdKeyboardArrowDown className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
