import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ReactGA from "react-ga";

import Home from "../home";
import Business from "../business";
import PrivacyPolicy from "../privacyPolicy";

ReactGA.initialize("UA-33385057-4");

const history = createHistory();
const historyListener = (location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

history.listen(historyListener);

const App = () => {
  // Fire history listener on page load
  historyListener(window.location);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/business" component={Business} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
