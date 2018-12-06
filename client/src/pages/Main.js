import React, { Component } from "react";
import API from "../utils/API";
//Carousel / Coverflow
import Coverflow from "react-coverflow";
//Material-UI
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
//Dropdown Menu
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";

const styles = theme => ({
  textField: {
    width: "50vw",
    margin: "0 25vw",
    marginBottom: "-10vw"
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
  searchContainer: {
    display: "flex"
  },
  dialog: {
    background: "rgba(50,50,50,0.55) !important"
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
  },
  //playlist
  icon: {
    color: "white",
    float: "right",
    position: "relative",
    bottom: "10px",
    right: "310px"
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
    active: 0,
    anchorEl: null
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

  handleClickClose = () => {
    this.setState({ open: false });
  };

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
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

  //save movie
  saveMovie = id => {
    const movie = this.state.movies.find(movie => movie.id === id);
    console.log(movie);
    API.saveMovie(movie)
      .then(({ data }) => {
        this.setState({ savedMovies: this.state.savedMovies.concat(data) });
        this.handleClickClose();
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

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
          <div>
            <IconButton
              className={classes.icon}
              aria-label="More"
              aria-owns={open ? "long-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleMenuClick}
            >
              <PlaylistPlay />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={this.handleMenuClose}
              PaperProps={{
                style: {
                  maxHeight: 200,
                  width: 200
                }
              }}
            >
              {this.state.savedMovies.map((movie, i) => (
                <MenuItem key={movie.title} onClick={this.handleMenuClose}>
                  {movie.title}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <Coverflow
          className="carousel"
          width={960}
          height={550}
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
            className={classes.dialog}
            open={this.state.open}
            keepMounted
            onClose={this.handleClickClose}
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
                <b>Overview: </b>
                {this.state.activeMovieInfo.overview}
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
              <Button
                onClick={() => this.saveMovie(this.state.activeMovieInfo.id)}
                color="primary"
              >
                Save Movie
              </Button>
              <Button onClick={this.handleClickClose} color="primary">
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
