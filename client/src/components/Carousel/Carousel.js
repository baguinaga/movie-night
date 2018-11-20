import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

const MyCarousel = () => {
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
          src="images/lightsBG.png"
          alt="Album one"
          data-action="https://facebook.github.io/react/"
        />
        <img
          src="images/lightsBG.png"
          alt="Album two"
          data-action="http://passer.cc"
        />
        <img
          src="images/lightsBG.png"
          alt="Album three"
          data-action="https://doce.cc/"
        />
        <img
          src="images/lightsBG.png"
          alt="Album four"
          data-action="http://tw.yahoo.com"
        />
      </Coverflow>
    </StyleRoot>
  );
};

export default MyCarousel;
