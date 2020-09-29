import React from "react";
import { Link } from "react-router-dom";

const Movies = ({ image, title, id }) => {
  return (
    <>
      {
        <div className="movie">
          <div className="movie-card">
            {image === null ? (
              <img
                className="movie-card-img"
                src={`https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png`}
              />
            ) : (
              <img
                className="movie-card-img"
                src={`https://image.tmdb.org/t/p/w500${image}`}
              ></img>
            )}
            <h2 className="movie-title">
              {title.length < 20 ? title : `${title.substring(0, 18)}...`}
            </h2>
            <Link className="movie-details" to={`/movie/${id}`}>
              More Details
            </Link>
          </div>
        </div>
      }
    </>
  );
};
export default Movies;
