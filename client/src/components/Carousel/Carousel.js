import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

const Carousel = props => {
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
      {props.movies.map(movie => 
        <img
        src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={`${movie.title}`}
        data-action="https://facebook.github.io/react/"
      />
      )}
        
      </Coverflow>
    </StyleRoot>
  );
};

export default Carousel;
