/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SitePage from './containers/SitePage';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/sites/:site" component={SitePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </App>
  </Router>
);
