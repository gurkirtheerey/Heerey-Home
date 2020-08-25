import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Hamburger } from "../../components/Hamburger/Hamburger";
import exercises from "../../data/exercises";
import { Exercise } from "../../components/Exercise/Exercise";
import { Exercises } from "../../components/Exercise/Exercises/Exercises";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../components/Modal/Modal";
import { Footer } from "../../components/Footer/Footer";

export const Dashboard = () => {
  const { goal } = useSelector((state) => state.authReducer.user);
  const [menu, setMenu] = useState(false);
  const [userExercises, setUserExercises] = useState(null);
  const [clickedExercise, setClickedExercise] = useState(false);
  const [clickedExercises, setClickedExercises] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    const exerciseList = exercises.find((exercise) => exercise.goal === goal);
    if (exerciseList) {
      setUserExercises(exerciseList);
      setClickedExercises(exerciseList.exercises[0].groupExercises);
    }
  }, [goal]);

  const onClick = (exercise) => {
    setClickedExercise(!clickedExercise);
    setClickedExercises(exercise.groupExercises);
  };

  const openModal = (exercise) => {
    setOpen(!open);
    setSelectedExercise(exercise);
  };

  return (
    <div
      className={`h-screen flex flex-col ${
        menu ? "bg-opacity-25 bg-gray-500" : null
      }`}
    >
      <Hamburger menu={menu} onClick={() => setMenu(!menu)} />
      <div
        onClick={() => setMenu(false)}
        className={`${!clickedExercise && "h-full"}`}
      >
        {!clickedExercise && (
          <div className="text-2xl text-center lg:h-32 h-16 lg:mb-32 mb-8 flex justify-center items-center tracking-wide font-sans animate-pulse">
            <span>Select a muscle group</span>
          </div>
        )}
        {userExercises && !clickedExercise && (
          <div className="lg:grid lg:grid-cols-3 lg:gap-16 flex flex-col items-center content-center gap-6">
            {userExercises.exercises.map((exercise, i) => (
              <Exercise
                key={i}
                onClick={() => onClick(exercise)}
                muscle={exercise.muscle}
              />
            ))}
          </div>
        )}
      </div>
      {clickedExercise && (
        <div
          className={`${menu && "bg-opacity-25"} h-full`}
          onClick={() => setMenu(false)}
        >
          <div className="animate-bounce px-4 mx-4">
            <FontAwesomeIcon
              className="cursor-pointer lg:text-4xl mb-4 text-xl"
              onClick={() => setClickedExercise(!clickedExercise)}
              icon={faHandPointLeft}
            />
          </div>
          <div>
            {clickedExercises &&
              clickedExercises.length &&
              clickedExercises.map((exercise, i) => (
                <div className="p-4" key={i}>
                  <Exercises
                    exercise={exercise}
                    onClick={() => openModal(exercise)}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
      {open && (
        <Modal onClick={() => openModal(null)} exercise={selectedExercise} />
      )}
      {!clickedExercise && <Footer />}
    </div>
  );
};
