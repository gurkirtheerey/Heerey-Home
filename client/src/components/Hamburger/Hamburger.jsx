import React, { useState } from "react";
import { Slider } from "../Slider/Slider";

export const Hamburger = ({ menu, onClick }) => {
  return (
    <div className="m-4 p-4 flex justify-between border-b-2 border-gray-500">
      <span className="flex flex-1 justify-center items-center font-semibold tracking-widest lg:text-xl text-lg">
        Heerey Home
      </span>
      <button
        onClick={onClick}
        className="flex items-center lg:px-6 px-4 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-red"
      >
        <svg
          className="fill-current lg:h-5 lg:w-5 h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <Slider menu={menu} />
    </div>
  );
};
