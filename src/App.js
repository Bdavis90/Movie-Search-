import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="movie/:id" component={Movie} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
