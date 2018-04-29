import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../home";
import Business from "../business";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/business" component={Business} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
