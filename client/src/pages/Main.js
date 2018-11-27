import React, { Component } from "react";
import API from "../utils/API";
//Carousel / Coverflow
import Coverflow from "react-coverflow";
//Material UI
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
//Dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./styles/Main.css";

const styles = theme => ({
  textField: {
    width: "50vw",
    margin: "0 25vw"
  },
  cssLabel: {
    "&$cssFocused": {
      color: red[500] + "!important"
    },
    color: "white !important"
  },
  cssFocused: {},
  cssOutlinedInput: {
    color: "white",
    "&$cssFocused $notchedOutline": {
      borderColor: red[500] + "!important"
    }
  },
  notchedOutline: {
    borderColor: "white !important"
  },
//dialog
  container: {
    textAlign: "center"
  },
  moviePoster: {
    width: "40%",
    maxWidth: "400px",
    height: "auto",
    float: "left"
  },
  overview: {
    textAlign: "left",
    position: "relative",
    left: 10
  },
  rate: {
    textAlign: "left",
    position: "relative",
    left: 10,
    paddingTop: 20
  },
  release: {
    textAlign: "left",
    paddingTop: 40,
    position: "relative",
    left: 10
  },
  title: {
    fontFamily: "Cinzel",
    textAlign: "center",
    fontSize: 30,
    borderBottom: "1px solid black"
  }
});

//Main Page
class Main extends Component {
  state = {
    movies: [],
    activeMovieInfo: {},
    savedMovies: [],
    open: false,
    isLoggedIn: false,
    username: "",
    active: 0
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

  //dialog

  handleClickOpen = movieTitle => {
    const moviePicked = this.state.movies.find(
      movie => movie.title === movieTitle
    );
    this.setState({
      activeMovieInfo: moviePicked,
      open: true
    });
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

  //dialog function
  dialogueMovies = movieTit1e => {
    API.movieInfo(movieTit1e).then(({ data }) => {
      this.setState({ movies: data });
    });
  };

  //save movie
  saveMovie = id => {
    const movie = this.state.movies.find(movie => movie.movieId === id);

    API.saveMovie(movie)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  saveMovie = id => {
    const movie = this.state.movieList.find(movie => movie.movieId === id);

    API.saveMovie(movie)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="wrapper">
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <TextField
              id="movieInput"
              className={classes.textField}
              name="search"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline
                }
              }}
              label="Search for a movie!"
              placeholder="Movie Title"
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange}
            />
          </form>
        </div>

        <Coverflow
          className="carousel"
          width={960}
          height={580}
          displayQuantityOfSide={3}
          navigation
          enableHeading
          active={this.state.active}
        >
          {this.state.movies.map((movie, i) => (
            <img
              key={movie.title}
              src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`${movie.title}`}
              onClick={() => this.handleClickOpen(movie.title)}
            />
          ))}
        </Coverflow>

        <div>
          <Dialog
            open={this.state.open}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              <Typography className={classes.title} variant="title">
                {this.state.activeMovieInfo.title}
              </Typography>
            </DialogTitle>
            <DialogContent className={classes.container}>
              <img
                className={classes.moviePoster}
                src={`http://image.tmdb.org/t/p/original/${
                  this.state.activeMovieInfo.poster_path
                }`}
                alt={this.state.activeMovieInfo.title}
              />

              <Typography className={classes.overview} variant="body1">
              <b>Overview: </b>{this.state.activeMovieInfo.overview}
              </Typography>
        
              <Typography className={classes.release}>
                <b>Release Date: </b> {this.state.activeMovieInfo.release_date}
              </Typography>
                
              <Typography className={classes.rate}>
                <b>Score: </b> {this.state.activeMovieInfo.vote_average}/10
              </Typography>

              <DialogContentText id="alert-dialog-slide-description" />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Save Movie
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
