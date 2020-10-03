import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState([]);

  const getMovie = () => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    ).then((data) => {
      setMovie(data.data);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

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

      <div className="current-movie-stats">
        <div className="current-movie-stats-center">
          <h3 className="current-moive-release-date">
            Release Date: {movie.release_date} Runtime: {movie.runtime} mins
          </h3>
        </div>
      </div>
      <h3 className="current-movie-plot">Plot: {movie.overview}</h3>
      <div className="current-movie-buttions">
        <a
          href={`https://www.imdb.com/title/${movie.imdb_id}`}
          className="current-movie-imdb"
        >
          View IMDb
        </a>
        <Link className="current-movie-imdb" to={`/`}>
          Back To Search
        </Link>
      </div>
    </div>
  );
};

export default Movie;
