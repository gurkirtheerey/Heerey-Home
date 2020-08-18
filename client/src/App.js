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
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
