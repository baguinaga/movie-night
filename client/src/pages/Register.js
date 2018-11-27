import React, { Component } from "react";
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
    height: "60vh",
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

class Register extends Component {
  state = {
    success: false,
    username: "",
    password: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  // Method to register a new user
  register = e => {
    e.preventDefault();
    API.register({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        console.log(res.data);
        this.setState({ success: res.data });
      })
      .catch(err => console.log(err.response.data));
  };

  render() {
    // If Signup was a success, take them to the Login page
    if (this.state.success) {
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
          id="firstname-input"
          value={this.state.firstName}
          onChange={this.handleInputChange}
          label="First Name"
          name="firstname"
          placeholder="First Name"
          className={classes.textField}
          type="text"
          margin="normal"
        />
        <TextField
          id="lastname-input"
          value={this.state.lastName}
          onChange={this.handleInputChange}
          label="Last Name"
          name="lastname"
          placeholder="Last Name"
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
          onClick={this.register}
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

export default withStyles(styles)(Register);
