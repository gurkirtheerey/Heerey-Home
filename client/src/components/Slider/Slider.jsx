import React from "react";
import "./Slider.css";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/actions/authenticate";
import { useDispatch } from "react-redux";

export const Slider = ({ menu }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`Slider h-screen lg:w-1/4 w-1/3 ${
        menu ? "SlideIn" : "SlideOut"
      }`}
    >
      <div className="lg:text-xl text-xs mt-8">
        <div className="m-4 underline">
          <NavLink to="/">
            <button className="hover:text-gray-500">Home</button>
          </NavLink>
        </div>
        <div className="m-4 underline">
          <NavLink to="/exercise-list">
            <button className="hover:text-gray-500">Exercises</button>
          </NavLink>
        </div>
        <div className="m-4 underline">
          <NavLink to="/nutrition">
            <button className="hover:text-gray-500">Nutrition</button>
          </NavLink>
        </div>
        <div className="m-4 underline">
          <button
            onClick={() => dispatch(logoutUser())}
            className="hover:text-gray-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
