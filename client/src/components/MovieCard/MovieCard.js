import React, { Component } from "react";
import { Card, CardTitle } from "react-materialize";

class MovieCard extends Component {
  render() {
    return (
      <Card
        header={
          <CardTitle reveal image={"images/lightsBG.png"} waves="light" />
        }
        title="Card Title"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      >
        <p>
          <a>This is a link</a>
        </p>
      </Card>
    );
  }
}

export default MovieCard;
