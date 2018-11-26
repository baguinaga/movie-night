import React, { Component } from "react";
import Coverflow from "react-coverflow";
import API from "../../utils/API";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.trendingMovies();
  }

  trendingMovies = () => {
    API.movieTrend().then(({ data }) => {
      this.setState({ movies: data });
    });
  };

  render() {
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={1}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
        >
          <div
            // onClick={() => ()}
            // onKeyDown={() => ()}
            role="menuitem"
            tabIndex="0"
          >
          </div>
            {this.state.movies.map((movie, i) => (
              <img
                key={i}
                src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`${movie.title}`}
                data-action="https://facebook.github.io/react/"
              />
            ))}
        </Coverflow>
      </div>
    );
  }
}

export default Carousel;
