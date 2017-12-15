import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App';
import BeansList from './BeansList';
import Beans from './Bean';

export default function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={BeansList} />
        <Route path="beans" component={Beans} />
      </Route>
    </Router>
  );
}
