import React, { Component } from "react";
import API from "../utils/API";
import Carousel from "../components/Carousel";
import PrimaryAppBar from "../components/PrimaryAppBar";
import "./styles/Main.css";

class Main extends Component {
  state = {
    isLoggedIn: true,
    username: ""
  };

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
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
      <div className="wrapper">
        <PrimaryAppBar />
        <br />
        <Carousel />
      </div>
    );
  }
}

export default Main;
