import React, { Component } from "react";
import Navbar from "../components/Navbar";

// import MovieCard from "../components/MovieCard"
// import { Redirect } from "react-router-dom";
import API from "../utils/API";
import MyCarousel from "../components/Carousel";
import "./styles/Main.css";

class Main extends Component {
  state = {
    isLoggedIn: true,
    username: "",
    movies: []
  };

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
    this.trendingMovies();
  }

  // Check login status
  loginCheck = () => {
    API.loginCheck()
      .then(res =>
        this.setState({
          isLoggedIn: res.data.isLoggedIn,
          username: res.data.username
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ isLoggedIn: false });
      });
  };

  trendingMovies = () => {
    API.movieTrend().then(({ data }) => {
      this.setState({ movies: data });
    });
  };

  //Testing OMBD API function/route
  // movieDetails = movieTitle => {
  //   API.movieInfo(movieTitle)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err.response));
  // };

  render() {
    // If user isn't logged in, don't let them see this page
    // if (!this.state.isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <div>
        <Navbar />
        <MyCarousel />
        {/* {this.state.movies.length ? (this.state.movies.map(movie => {
          return <MovieCard movieImage={movie.poster_path} title={movie.title}/>
        })) : ("No movies found")}  */}
      </div>
    );
  }
}

export default Main;
