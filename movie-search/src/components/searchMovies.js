import React, { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./Movies";
import MovieList from "./MovieList";

const SearchMovies = () => {
  const [results, setResults] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const apiKey = "7a4b56a1c86be6435637369c10a849bc";
  console.log(results);
  console.log(searchTitle);
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${searchTitle}`
      )
      .then(data => {
        console.log(data);
        setResults([...data.data.results]);
      });
  };

  const handleChange = e => {
    setSearchTitle(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar">
        <label>Search for a movie</label>
        <input onChange={handleChange} value={searchTitle} />
        <button>Search</button>
      </form>
      <MovieList movies={results} />
    </>
  );
};

export default SearchMovies;
