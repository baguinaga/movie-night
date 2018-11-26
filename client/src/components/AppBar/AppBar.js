import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import "../styles/AppBar.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  login: {
    marginLeft: 20,
    color: "white",
  },

  signup: {
    color: "white",
    marginLeft: -10,
    marginRight: 20
  },

  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12
  },
  title: {
    fontFamily: "'Cinzel', serif;",
    fontSize: 45,
    color: "white",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: 10,
    height: 45,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -60
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    fontFamily: "'Lato', sans-serif;"
  },
  inputInput: {
    fontFamily: "'Lato', sans-serif;",
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: "100%"
      }
    }
  }
});

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <div className="appTitle">
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              MovieNight
            </Typography>
          </div>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for a movie!"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <Typography>
            <div className={classes.login}>
              <Button>Log In</Button>
            </div>
          </Typography>
          <Typography>
            <div className={classes.signup}>
              <Button>Sign Up</Button>
            </div>
          </Typography>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchAppBar);
