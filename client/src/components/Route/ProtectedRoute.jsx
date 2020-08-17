import React from "react";
import { Route } from "react-router-dom";

export const ProtectedRoute = ({ Component, loggedIn, path, ...rest }) => {
  console.log("is logged in", loggedIn, path);
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn ? <h1>IFNDSFSDG</h1> : <div>YOETOWEFSD:Fhads;ga</div>;
      }}
    />
  );
};
