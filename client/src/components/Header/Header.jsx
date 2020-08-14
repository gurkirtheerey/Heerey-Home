import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useRef } from "react";
import { useEffect } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-center">
      <nav className="w-4/5 flex items-center justify-between flex-wrap p-6 mb-12">
        <NavLink
          to="/"
          className="flex items-center lg:text-xl text-sm font-semibold text-gray-800 mr-4 hover:pointer hover:text-gray-500"
        >
          Heerey Home
        </NavLink>
        <div className="block lg:hidden" onClick={() => setMenu(!menu)}>
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-red">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {menu && (
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="flex-grow">
              <NavLink
                to="/exercises"
                className="block mt-6 lg:inline-block lg:mt-0s text-gray-500 hover:text-gray-800 m-6"
              >
                Exercises
              </NavLink>
              <NavLink
                to="products"
                className="block mt-6 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-800 m-6"
              >
                Essentials
              </NavLink>
              <NavLink
                to="/workouts"
                className="block mt-6 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-800 m-6"
              >
                Workouts
              </NavLink>
              <NavLink
                to="/contact"
                className="block mt-6 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-800 m-6"
              >
                Contact
              </NavLink>
              <NavLink
                to="/register"
                className="hidebtns block mt-6 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-800 m-6"
              >
                <button className="hover:text-gray-800 font-semibold">
                  Sign up
                </button>
              </NavLink>
              <NavLink
                to="/login"
                className="hidebtns block mt-6 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-800 m-6"
              >
                <button className="hover:text-gray-800 font-semibold">
                  Login
                </button>
              </NavLink>
            </div>
          </div>
        )}
        <div className="hidden lg:flex lg:w-32 justify-between text-gray-600 font-semibold">
          <NavLink to="/login" className="hover:text-gray-600">
            <button className="hover:text-gray-800 font-semibold">Login</button>
          </NavLink>
          <NavLink to="/register">
            <button className="hover:text-gray-800 font-semibold">
              Sign up
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
