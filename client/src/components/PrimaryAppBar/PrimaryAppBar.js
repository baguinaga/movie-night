import React, { Component } from "react";
import PropTypes from "prop-types";
// Material-UI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
// Icons
import Login from "@material-ui/icons/Input";
import PersonAdd from "@material-ui/icons/PersonAdd";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%"
  },
  login: {
    marginLeft: 20,
    color: "white"
  },
  register: {
    color: "white",
    marginLeft: -10,
    marginRight: 20
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    fontFamily: "Cinzel"
  },
  typography: {
    useNextVariants: true
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class PrimaryAppBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // Dropdown menu (Account Circle)
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    // Collapsed downdown menu for mobile
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Login />
          </IconButton>
          <p>Login</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <PersonAdd />
          </IconButton>
          <p>Register</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            {/* Project Title */}
            <Button
              variant="text"
              className={classes.login}
              component={Link}
              to="/"
              // onClick={props.handleFormSubmit}
            >
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                MovieNight
              </Typography>
            </Button>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* Login */}
              <Button
                variant="text"
                className={classes.login}
                component={Link}
                to="/login"
                // onClick={props.handleFormSubmit}
              >
                <Login />
                Login
              </Button>
              {/* Register */}
              <Button
                variant="text"
                className={classes.register}
                color="primary"
                component={Link}
                to="/register"
                // onClick={props.handleFormSubmit}
              >
                <PersonAdd />
                Register
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimaryAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimaryAppBar);
