import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrimaryAppBar from "./components/PrimaryAppBar";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => (
  <Router>
    <div>    
      <PrimaryAppBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
