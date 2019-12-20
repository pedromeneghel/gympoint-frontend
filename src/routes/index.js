import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/SignIn';
import PlansList from '../pages/Plans';

/* import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile'; */

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/plans" component={PlansList} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
