import React from "react";
import Coverflow from "react-coverflow";
import "../styles/Carousel.css";

const Carousel = props => (
  <Coverflow
    className="carousel"
    width={960}
    height={480}
    displayQuantityOfSide={2}
    navigation
    infiniteScroll
    enableHeading
  >
    {props.movies.map((movie, i) => (
      <img
        key={i}
        src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={`${movie.title}`}
        data-action="https://facebook.github.io/react/"
      />
    ))}
  </Coverflow>
);

export default Carousel;
