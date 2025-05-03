import React from "react";

const Header = () => {
  return (
    <div className=" bg-indigo-600 text-white p-6">
      <div className="flex justify-between">
        <h1>HMS</h1>
        <ul className="flex text-sm gap-10">
          <li>Home</li>
          <li>Gallery</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="text-sm space-x-6 text-indigo-600 font-bold">
          <button className="bg-white p-2 rounded-xl">Book Event</button>
          <button>Book Room</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
