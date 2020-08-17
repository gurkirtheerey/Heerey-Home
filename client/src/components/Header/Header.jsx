import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { userNotLoggedIn } from "../../redux/actions/authenticate";

export const Header = () => {
  const [menu, setMenu] = useState(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

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
              {isLoggedIn ? (
                <NavLink
                  to="/exercises"
                  className="block mt-6 lg:inline-block lg:mt-0s text-gray-500 hover:text-gray-800 m-6"
                >
                  Exercises
                </NavLink>
              ) : (
                <div className="block lg:inline-block lg:mt-0s text-gray-500 hover:text-gray-800 m-6"></div>
              )}

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
              {!isLoggedIn ? (
                <React.Fragment>
                  <NavLink to="/login">
                    <span className="hover:text-gray-300 text-xl block mt-6 lg:inline-block lg:mt-0 text-gray-700 m-6 lg:absolute lg:right-0 lg:pr-48 lg:pt-6 lg:text-right">
                      Login
                    </span>
                  </NavLink>
                  <NavLink to="/register">
                    <span className="hover:text-gray-300 font-bold text-xl block mt-6 lg:inline-block lg:mt-0 text-gray-700 m-6 lg:absolute lg:right-0 lg:pr-16 lg:pt-6 lg:text-right">
                      Sign up
                    </span>
                  </NavLink>
                </React.Fragment>
              ) : (
                <button
                  onClick={() => dispatch(userNotLoggedIn())}
                  className="hover:text-gray-300 text-xl font-bold block mt-6 lg:inline-block lg:mt-0 text-gray-700 m-6 lg:absolute lg:right-0 lg:pr-24 lg:pt-6 lg:text-right"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
