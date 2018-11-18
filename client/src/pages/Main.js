import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

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
  movieDetails = movieTitle => {
    API.movieInfo(movieTitle)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  };

  render() {
    // If user isn't logged in, don't let them see this page
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <h1>You Made it to the main page {this.state.isLoggedIn.username}!</h1>
    );
  }
}

//Parallax
// {/* <div>
//   <Parallax imageSrc="/Users/cnat/Desktop/FresherTomatoes/client/images/lightsBG.png"/>
//   <div className="section white">
//     <div className="row container">
//       <h2 className="header">Parallax</h2>
//       <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
//     </div>
//   </div>
// </div> */}

//modal for each movie on click (or movie card?)
/* <Modal
  header='Modal Header'
  fixedFooter
  trigger={<Button>MODAL WITH FIXED FOOTER</Button>}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</Modal> */
export default Main;
