import React from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-xs">
        <label className="block text-gray-700 text-md font-bold text-center mb-4">
          Register
        </label>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline mb-4"
              type="button"
            >
            Register
            </button>
            <NavLink
              to="/forgotpassword"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4"
            >
              Forgot Password?
            </NavLink>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Heerey Home Fitness. <br /> All rights reserved.
        </p>
      </div>
    </div>
  );
};
