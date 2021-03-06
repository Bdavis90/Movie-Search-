import React, { useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

const SearchMovies = () => {
  const [results, setResults] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [title, setTitle] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTitle}`
      )
      .then((data) => {
        setResults([...data.data.results]);
        setTotalResults(data.data.total_results);
        setTitle(data.data.original_title);
      });
    setCurrentPage(1);
  };

  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const nextPage = (pageNumber) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTitle}&page=${pageNumber}`
      )
      .then((data) => {
        setResults([...data.data.results]);
        setCurrentPage(pageNumber);
      });
  };

  const numberOfPages = Math.floor(totalResults / 20);

  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar">
        <label>Search for a movie</label>
        <input
          onChange={handleChange}
          value={searchTitle}
          placeholder="Search for a movie..."
        />
        <button>Search</button>
      </form>
      <MovieList movies={results} title={title} />
      {totalResults > 20 ? (
        <Pagination
          pages={numberOfPages}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default SearchMovies;
