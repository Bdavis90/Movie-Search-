import React from "react";
import "./App.css";
import axios from "axios";
import SearchMovies from "./components/searchMovies";
import Title from "./components/title";

function App() {
  return (
    <>
      <Title />
      <SearchMovies onSubmit />
    </>
  );
}

export default App;
