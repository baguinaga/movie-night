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
        <Route exact path='/' render={(props) => <Main {...props} />} />
        <Route exact path='/login' render={(props) => <Login {...props} />} />
        <Route
          exact
          path='/register'
          render={(props) => <Register {...props} />}
        />
        <Route render={(props) => <Main {...props} />} />
      </Switch>
    </div>
  </Router>
);

export default App;
