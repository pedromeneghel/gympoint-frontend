import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/SignIn';
import EnrollmentsList from '../pages/Enrollments';
import HelpOrdersList from '../pages/HelpOrders';
import PlansList from '../pages/Plans';
import StudentsList from '../pages/Students';

/* import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile'; */

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/enrollments" component={EnrollmentsList} />
      <Route path="/help-orders" component={HelpOrdersList} />
      <Route path="/plans" component={PlansList} />
      <Route path="/students" component={StudentsList} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
