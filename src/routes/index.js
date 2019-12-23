import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/SignIn';

import EnrollmentsList from '../pages/Enrollments';

import HelpOrdersList from '../pages/HelpOrders';

import PlansList from '../pages/Plans';
import PlansAdd from '../pages/Plans/Add';
import PlansEdit from '../pages/Plans/Edit';

import StudentsList from '../pages/Students';
import StudentsAdd from '../pages/Students/Add';
import StudentsEdit from '../pages/Students/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/enrollments" component={EnrollmentsList} />
      <Route path="/help-orders" component={HelpOrdersList} />

      <Route path="/plans" exact component={PlansList} />
      <Route path="/plans/add" component={PlansAdd} />
      <Route path="/plans/edit" component={PlansEdit} />

      <Route path="/students" exact component={StudentsList} />
      <Route path="/students/add" component={StudentsAdd} />
      <Route path="/students/edit" component={StudentsEdit} />

      <Route path="/" component={SignIn} />
    </Switch>
  );
}
