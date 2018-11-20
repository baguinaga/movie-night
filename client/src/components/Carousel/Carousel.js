import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import "../styles/Carousel.css";

const MyCarousel = (props) => {
  return (
    <StyleRoot>
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          "@media (max-width: 900px)": {
            width: "600px",
            height: "300px"
          },
          "@media (min-width: 900px)": {
            width: "960px",
            height: "600px"
          }
        }}
      >
        <img
          src={`http://image.tmdb.org/t/p/original/${props.movieImage}`}
          alt={`${props.title}`}
          data-action="https://facebook.github.io/react/"
        />
        <img
          src={`http://image.tmdb.org/t/p/original/${props.movieImage}`}
          alt={`${props.title}`}
          data-action="http://passer.cc"
        />
        <img
          src={`http://image.tmdb.org/t/p/original/${props.movieImage}`}
          alt="Album three"
          data-action="https://doce.cc/"
        />
        <img
          src={`http://image.tmdb.org/t/p/original/${props.movieImage}`}
          alt="Album four"
          data-action="http://tw.yahoo.com"
        />
      </Coverflow>
    </StyleRoot>
  );
};

export default MyCarousel;
