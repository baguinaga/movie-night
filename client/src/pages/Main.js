import React, { Component } from "react";
import { Parallax } from "react-materialize";
import Navbar from "../components/Navbar";
// import { Redirect } from "react-router-dom";
import API from "../utils/API";
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
      <div>
        <Navbar />
        <div>
          <Parallax imageSrc="images/lightsBG.png" />
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">
              Parallax is an effect where the background content or image in
              this case, is moved at a different speed than the foreground
              content while scrolling.
            </p>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg" />
      </div>
    );
  }
}

export default Main;
