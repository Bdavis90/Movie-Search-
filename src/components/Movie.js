import React from "react";

const Movie = (props) => {
  const { id } = props.match.params;
  console.log(props);

  const getMovie = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  getMovie();
  return <div style={{ backgroundColor: "white" }}>Movie Component</div>;
};

export default Movie;
