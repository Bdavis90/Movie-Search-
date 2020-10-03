import React from "react";
import Movies from "./Movies";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-container">
      <div className="movie-list">
        {movies.map((movie, i) => {
          return (
            <Movies
              image={movie.poster_path}
              title={movie.original_title}
              id={movie.id}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
