import React from "react";

export const Exercises = ({ exercise, onClick }) => {
  const { name, description, image } = exercise;

  return (
    <div
      onClick={onClick}
      className="lg:max-w-xl h-48 shadow-lg rounded-lg lg:max-w-full cursor-pointer transition duration-1000 ease-in-out transform hover:-translate-y-2 hover:bg-gray-200"
    >
      <div className="flex ">
        <img
          className="object-fill h-40 w-40 rounded-lg"
          src={require(`../../../assets/${image}.jpg`)}
          alt="Barbell Press"
        />
        <div>
          <span className="font-bold mb-6">{name}</span>
          <p className="text-gray-700 mt-2 p-1 lg:text-sm text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
