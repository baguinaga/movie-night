import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
//Material-UI
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center",
    background: "rgba(50,50,50,0.55)",
    height: "45vh",
    width: "60vw",
    margin: "10vh auto",
    padding: "5vh",
  },
  title: {
    fontFamily: "Cinzel",
    fontSize: "1.5em",
    color: "white",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "90%",
  },
  cssLabel: {
    "&$cssFocused": {
      color: red[500] + "!important",
    },
    color: "white !important",
  },
  cssFocused: {},
  cssOutlinedInput: {
    color: "white",
    "&$cssFocused $notchedOutline": {
      borderColor: red[500] + "!important",
    },
  },
  notchedOutline: {
    borderColor: "white !important",
  },
  button: {
    margin: "auto auto",
    width: "10%",
    height: "10%",
    borderColor: "white !important",
    color: "white !important",
  },
});

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  // Method to handle user login, should redirect to main page when done
  login = (event) => {
    event.preventDefault();
    API.login({ username: this.state.username, password: this.state.password })
      .then((res) => {
        this.setState({ isLoggedIn: res.data });
      })
      .catch((err) => console.log(err.response));
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/' />;
    }

    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete='off'>
        <Typography
          className={classes.title}
          variant='h6'
          color='inherit'
          noWrap
        >
          Login
        </Typography>
        <TextField
          required
          id='username-input'
          name='username'
          label='Username'
          placeholder='Username'
          margin='normal'
          variant='outlined'
          type='text'
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleInputChange}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <TextField
          required
          id='password-input'
          name='password'
          label='Password'
          placeholder='Password'
          margin='normal'
          variant='outlined'
          type='password'
          autoComplete='current-password'
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleInputChange}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <Button
          type='submit'
          onClick={this.login}
          variant='outlined'
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
