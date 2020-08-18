//eslint-disable-next-line
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  !auth && toast.warn("You must be registered to see this page...");
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
