import React, { useState, useEffect } from "react";

const Movies = ({ movies, image }) => {
  console.log(movies);
  console.log(image);
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
          </div>
        </div>
      }
    </>
  );
};
export default Movies;
