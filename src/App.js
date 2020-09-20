import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Movie} />
      </Switch>
    </>
  );
}

export default App;
