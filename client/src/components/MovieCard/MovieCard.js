import React from "react";
import { Card, CardTitle } from "react-materialize";

const MovieCard = props => {
  return (
    <Card
    header={
      <CardTitle
        reveal
        image={`http://image.tmdb.org/t/p/original/${props.movieImage}`}
        waves="light"
      />
    }
    title={props.title}
    reveal={
      <p>
        Here is some more information about this product that is only revealed
        once clicked on.
      </p>
    }
  >
    <p>
      <a>This is a link</a>
    </p>
  </Card>
  )
};

export default MovieCard;
