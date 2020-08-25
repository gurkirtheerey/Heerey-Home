import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Login } from "./views/Login/Login";
import { Register } from "./views/Register/Register";
import { ExerciseList } from "./views/ExerciseList/ExerciseList";
import { ProtectedRoute } from "./components/Route/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/authenticate";
import { Contact } from "./views/Contact/Contact";
import { Dashboard } from "./views/Dashboard/Dashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  console.log("USER AUTHENTICATED ------", isLoggedIn);

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          path="/exercises"
          auth={isLoggedIn}
          component={ExerciseList}
        />
        <ProtectedRoute
          path="/dashboard"
          auth={isLoggedIn}
          component={Dashboard}
        />
        <ProtectedRoute
          path="/workouts"
          auth={isLoggedIn}
          component={Dashboard}
        />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
