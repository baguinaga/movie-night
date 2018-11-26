import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrimaryAppBar from "./components/PrimaryAppBar";
import Main from "./pages/Main";

const App = () => (
  <Router>
    <div>    
      <PrimaryAppBar />
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> */}
        <Route component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
