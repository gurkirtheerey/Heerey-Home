//eslint-disable-next-line
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
