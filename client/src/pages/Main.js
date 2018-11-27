import React, { Component } from "react";
import API from "../utils/API";
import Coverflow from "react-coverflow";
// import PrimaryAppBar from "../components/PrimaryAppBar";
// import Button from "@material-ui/core/Button";

// Text field
import TextField from "@material-ui/core/TextField";
import "./styles/Main.css";

//dialog
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from '@material-ui/core/Typography';
// import Slide from '@material-ui/core/Slide';

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

  handleClickOpen = (movieTitle) => {
    const moviePicked = this.state.movies.find(movie => movie.title === movieTitle)
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
  saveMovie = (id) => {
    const movie = this.state.movies.find(movie => movie.movieId === id);

    API.saveMovie(movie)
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }


  saveMovie = (id) => {
    const movie = this.state.movieList.find(movie => movie.movieId === id);

    API.saveMovie(movie)
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }


  render() {
    // Reference for checking if user is logged in
    // If user isn't logged in, don't let them see this page
    // if (!this.state.isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }

    return (
      <div className="wrapper">
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
                shrink: true
              }}
              onChange={this.handleInputChange}
            />
          </form>
          </div>
              
          <Coverflow
            className="carousel"
            width={960}
            height={480}
            displayQuantityOfSide={2}
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
             <Typography variant='title'>{this.state.activeMovieInfo.title}</Typography>
            </DialogTitle>
            <DialogContent>
            <img src={`http://image.tmdb.org/t/p/original/${this.state.activeMovieInfo.poster_path}`} alt= {this.state.activeMovieInfo.title}></img>
                      
            <Typography variant='body1'>{this.state.activeMovieInfo.overview}</Typography>
                   


             
              <DialogContentText id="alert-dialog-slide-description">
              
              </DialogContentText>
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

export default Main;
