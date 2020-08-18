import React from "react";
import { ExerciseGoal } from "../../components/ExerciseGoal/ExerciseGoal";
import { useDispatch, useSelector } from "react-redux";
import { submitGoal } from "../../redux/actions/authenticate";
import { Loader } from "../../components/Loader/Loader";
import { Redirect } from "react-router-dom";

export const ExerciseList = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.authReducer.loading);
  const goal = useSelector((state) => state.authReducer.user.goal);

  if (loader) return <Loader />;
  if (goal) {
    return <Redirect to="/plan" />;
  }

  return (
    <div>
      <div className="flex flex-col h-screen">
        <h2 className="mx-auto mt-24 mb-6 font-semibold text-gray-800 lg:text-xl text-sm text-center">
          Select your preference for a list of personalized workouts and
          nutrition guidelines.
        </h2>
        <div className="m-auto flex lg:flex-row flex-col justify-center items-center pb-24">
          <div className="p-4" onClick={() => dispatch(submitGoal("strength"))}>
            <ExerciseGoal goal="strength" />
          </div>
          <div
            className="p-4"
            onClick={() => dispatch(submitGoal("hypertrophy"))}
          >
            <ExerciseGoal goal="hypertrophy" />
          </div>
          <div className="p-4" onClick={() => dispatch(submitGoal("weight"))}>
            <ExerciseGoal goal="weight" />
          </div>
        </div>
      </div>
    </div>
  );
};
