import React from "react";

const Movies = ({ image, title }) => {
  return (
    <>
      {
        <div className="movie">
          <div className="movie-card">
            {image === null ? (
              <img
                src={`https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png`}
              />
            ) : (
              <img src={`https://image.tmdb.org/t/p/w500${image}`}></img>
            )}
            <h2 className="movie-title">{title}</h2>
          </div>
        </div>
      }
    </>
  );
};
export default Movies;
