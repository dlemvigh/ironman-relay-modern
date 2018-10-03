import React from "react";
import { Router, Route, IndexRoute } from "react-router";

import App from "./Components/App/App";
import IndexPage from "./Components/Pages/IndexPage";

const Routes = (props) => (
  <Router {...props}>
    <Route
      path="/"
      component={App}
    >
      <IndexRoute
        component={IndexPage}
      />
      <Route
        path="graphs"
        component={() => <span>graphs</span>}
      />
      <Route
        path="season/:season"
        component={(props) => <pre>{JSON.stringify(props, null, 2)}</pre>}
      />
      <Route
        path=":username"
        component={(props) => <pre>{JSON.stringify(props, null, 2)}</pre>}
      />
    </Route>
  </Router>
);

export default Routes;
