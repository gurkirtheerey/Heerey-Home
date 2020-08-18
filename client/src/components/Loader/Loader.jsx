import React from "react";
import { ClipLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ClipLoader size={150} loading={true} color="#c7c7c7" />
    </div>
  );
};
