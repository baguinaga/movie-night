import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

import Navbar from "./components/Navbar/Navbar";
import Parallax from "react-materialize/lib/Parallax";

const App = () => (
  <Router>
    <div>
      <Parallax>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={Main} />
      </Switch>
      </Parallax>
    </div>
  </Router>
);

export default App;
