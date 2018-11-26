import React, { Component } from "react";
import API from "../utils/API";
import Coverflow from "react-coverflow";
import PrimaryAppBar from "../components/PrimaryAppBar";
import "./styles/Main.css";

//movie modal
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
// import Button from "@material-ui/core/Button";

// Text field
import TextField from "@material-ui/core/TextField";

//main
class Main extends Component {
  state = {
    movies: [],
    open: false,
    isLoggedIn: false,
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      this.recommendedMovies(this.state.search);
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  //getting trending movies from server-side call
  trendingMovies = () => {
    API.movieTrend().then(({ data }) => {
      this.setState({ movies: data });
    });
  };

  //movie recommended based on movie title
  recommendedMovies = movieTit1e => {
    API.movieRec(movieTit1e).then(({ data }) => {
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
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <TextField
              id="movieInput"
              className="textField"
              name="search"
              label="Search for a movie!"
              style={{ margin: 8 }}
              placeholder="Movie Title"
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleInputChange}
            />
          </form>

          <Coverflow
            className="carousel"
            width={960}
            height={480}
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
              />
            ))}
          </Coverflow>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div>
            <h1>The modal is working</h1>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Main;
