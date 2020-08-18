import React from "react";

const GOALS = [
  {
    goal: "strength",
    title: "Get Stronger 🏋️‍♂️",
    text:
      "Gain the most mass while performing highly intense strength training",
    tags: ["#strength", "#gainz"],
  },
  {
    goal: "hypertrophy",
    title: "Hypertrophy 💪🏽",
    text: "Increase muscle size by pushing yourself to the limit!",
    tags: ["#growth", "#volume"],
  },
  {
    goal: "weight",
    title: "Lose Weight 👟",
    text: "Drop it quickly by performing a mix of strength training & cardio",
    tags: ["#loseit", "#endurance"],
  },
];

export const ExerciseGoal = ({ goal }) => {
  let goals = GOALS.find((g) => g.goal === goal);

  return (
    <div className="max-w-sm lg:py-12 bg-gray-100 rounded overflow-hidden shadow-xl transition delay-100 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
      <div className="text-center px-4 mt-4 text-xl font-semibold text-gray-900">
        <h1>{goals.title}</h1>
      </div>
      <div className="px-6 pt-4 pb-4 text-center text-sm text-gray-700">
        <p>{goals.text}</p>
      </div>
      <div className="px-6 lg:pb-0 pb-4 text-center">
        {goals.tags.map((goal) => (
          <span
            key={goal}
            className="inline-block lg:pt-0 mt-4 bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
          >
            {goal}
          </span>
        ))}
      </div>
    </div>
  );
};
