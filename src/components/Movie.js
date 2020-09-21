import React, { useState, useEffect } from "react";
import Axios from "axios";

const Movie = (props) => {
  const { id } = props.match.params;
  console.log(props);
  const [movie, setMovie] = useState([]);

  const getMovie = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    ).then((data) => {
      console.log(data);
      setMovie(data.data);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return (
    <div>
      {movie.poster_path === null ? (
        <img
          src={`https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png`}
        />
      ) : (
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
      )}
      <h2 className="movie-title">{movie.title}</h2>
      <ul>
        <li className="movie-plot">{movie.overview}</li>
        <li className="moive-release-date">{movie.release_date}</li>
        <li className="movie-runtime">{movie.runtime}</li>
      </ul>
    </div>
  );
};

export default Movie;
