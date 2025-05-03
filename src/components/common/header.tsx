import React from "react";
import { Permanent_Marker } from "next/font/google";
import Link from "next/link";
const permanent_marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className=" bg-indigo-600 text-white p-6">
      <div className="flex justify-between items-center">
        <h1 className={`${permanent_marker.className} text-2xl`}>HMS</h1>
        <div className="flex gap-6 items-center">
          <ul className="flex text-sm gap-6 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Gallery</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="text-sm space-x-6 font-bold  ">
            <button className="px-4 py-2  bg-indigo-900 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-300 shadow-xl">
              Book Event
            </button>
            <button className="px-4 py-2  bg-indigo-900 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-300 shadow-xl">
              Book Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
