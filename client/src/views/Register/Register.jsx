import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { registerUser } from "../../redux/actions/authenticate";
import { useDispatch, useSelector } from "react-redux";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const dispatch = useDispatch();
  const history = useHistory();

  if (isLoggedIn) {
    history.push("/");
  }

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
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className={`shadow appearance-none border ${
                password.length < 8 && password.length >= 1
                  ? "border-red-500"
                  : null
              } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && password.length >= 1 && (
              <p className="text-red-500 text-xs italic">
                Password must be 8 or more characters.
              </p>
            )}
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                username.length < 6 || password.length < 8
                  ? "cursor-not-allowed opacity-50"
                  : null
              } `}
              type="button"
              onClick={() => dispatch(registerUser(email, username, password))}
              disabled={username.length < 6 || password.length < 8}
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
