import React from "react";
import "./App.css";
import SearchMovies from "./components/SearchMovies";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Title />
      <SearchMovies onSubmit />
    </>
  );
}

export default App;
