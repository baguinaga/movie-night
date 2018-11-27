import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.09)",
    height: "40vh",
    width: "60vw",
    margin: "15vh auto"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "90%"
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "10%",
    height: "10%"
  }
});

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  };


  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // Method to handle user login, should redirect to main page when done
  login = event => {
    event.preventDefault();
    API.login({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        this.setState({ isLoggedIn: res.data });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }

    const { classes } = this.props;

    return (
      <form className={classes.container} autoComplete="off">
        <TextField
          required
          id="username-input"
          value={this.state.username}
          onChange={this.handleInputChange}
          label="Username"
          name="username"
          placeholder="Username"
          className={classes.textField}
          type="text"
          margin="normal"
        />
        <TextField
          required
          id="password-input"
          value={this.state.password}
          onChange={this.handleInputChange}
          label="Password"
          name="password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button
          type="submit"
          onClick={this.login}
          variant="outlined"
          color="primary"
          className={classes.button}

        >
          Submit
        </Button>
      </form>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
