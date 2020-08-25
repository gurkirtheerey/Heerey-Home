import React from "react";

export const Exercise = ({ muscle, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="animate-pulse max-w-sm m-auto text-center shadow-xl p-4 rounded-lg lg:w-full w-1/3 cursor-pointer hover:bg-gray-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <div className=" text-gray-700 lg:text-lg font-semibold text-sm capitalize">
        {muscle}
      </div>
    </div>
  );
};
