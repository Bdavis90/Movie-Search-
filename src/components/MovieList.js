import React from "react";
import Movies from "./Movies";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-container">
      <div className="movie-list">
        {movies.map((movie, i) => {
          return (
            <Movies
              movies={movie}
              image={movie.poster_path}
              title={movie.original_title}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
