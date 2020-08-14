import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Login } from "./views/Login/Login";
import { Register } from "./views/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
