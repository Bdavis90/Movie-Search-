import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="current-movie-container">
      {movie.poster_path === null ? (
        <img
          className="current-movie-img"
          src={`https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png`}
        />
      ) : (
        <img
          className="current-movie-img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        ></img>
      )}
      <h2 className="current-movie-title">{movie.title}</h2>
      <ul>
        <li className="current-moive-release-date">{movie.release_date}</li>
        <li className="current-movie-runtime">{movie.runtime}</li>
        <li className="current-movie-plot">{movie.overview}</li>
      </ul>
      <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>View IMDb</a>
      <Link to={`/`}>Back To Search</Link>
    </div>
  );
};

export default Movie;
