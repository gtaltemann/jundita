import React from "react";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import App from "./App";
import BeansList from "./BeansList";
import Brands from "./Brands";

export default function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={BeansList} />
        <Route path="brands" component={Brands} />
      </Route>
    </Router>
  );
}
