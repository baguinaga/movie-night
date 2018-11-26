import React, { Component } from "react";
import Coverflow from "react-coverflow";
import API from "../../utils/API";
import "../styles/Carousel.css";

class Carousel extends Component {
  state = {
    movies: [],
    active: 0
  };

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
      <Coverflow
        className="carousel"
        width={960}
        height={480}
        active={this.state.active}
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
      >
        {this.state.movies.map((movie, i) => (
          <img
            key={i}
            src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={`${movie.title}`}
            data-action="https://facebook.github.io/react/"
          />
        ))}
      </Coverflow>
    );
  }
}

export default Carousel;
