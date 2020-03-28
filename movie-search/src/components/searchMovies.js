import React, { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./movies";

const SearchMovies = () => {
  const [results, setResults] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const apiKey = "7a4b56a1c86be6435637369c10a849bc";
  console.log(results);
  const onSubmit = e => {
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

  const onChange = e => {
    setSearchTitle(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <label>Search for a movie</label>
      <input onChange={onChange} value={searchTitle} />
      <button>Search</button>
      <Movies movies={results} />
    </form>
  );
};

export default SearchMovies;
