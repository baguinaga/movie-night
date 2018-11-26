import React, { Component } from "react";
import API from "../utils/API";
import Carousel from "../components/Carousel";
import PrimaryAppBar from "../components/PrimaryAppBar";
import "./styles/Main.css";

class Main extends Component {
  state = {
    movies: [],
    isLoggedIn: true,
    username: ""
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

  // Taking user input from the searchbar
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //getting trending movies from server-side call
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
    // Reference for checking if user is logged in
    // If user isn't logged in, don't let them see this page
    // if (!this.state.isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <div className="wrapper">
        <PrimaryAppBar />
        <br />
        <Carousel movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
