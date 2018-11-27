import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
//Material-UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

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
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "10%",
    height: "10%",
    borderColor: "white !important",
    color: "white !important"
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
  register = event => {
    event.preventDefault();
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
          name="username"
          label="Username"
          placeholder="Username"
          margin="normal"
          variant="outlined"
          type="text"
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleInputChange}
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
        />
        <TextField
          required
          id="firstname-input"
          name="firstname"
          label="First Name"
          placeholder="First Name"
          margin="normal"
          variant="outlined"
          type="text"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleInputChange}
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
        />
        <TextField
          required
          id="lastname-input"
          name="lastname"
          label="Last Name"
          placeholder="Last Name"
          margin="normal"
          variant="outlined"
          type="text"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleInputChange}
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
        />
        <TextField
          required
          id="password-input"
          name="password"
          label="Password"
          placeholder="Last Name"
          margin="normal"
          variant="outlined"
          type="password"
          className={classes.textField}
          value={this.state.password}
          onChange={this.handleInputChange}
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
