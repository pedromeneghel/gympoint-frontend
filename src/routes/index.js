import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import SignIn from '../pages/SignIn';

import EnrollmentsList from '../pages/Enrollments';
import EnrollmentsAdd from '../pages/Enrollments/Add';
import EnrollmentsEdit from '../pages/Enrollments/Edit';

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
      <Route path="/enrollments" exact component={EnrollmentsList} isPrivate />
      <Route path="/enrollments/add" component={EnrollmentsAdd} isPrivate />
      <Route
        path="/enrollments/edit/:idEnrollment"
        component={EnrollmentsEdit}
        isPrivate
      />

      <Route path="/help-orders" component={HelpOrdersList} isPrivate />

      <Route path="/plans" exact component={PlansList} isPrivate />
      <Route path="/plans/add" component={PlansAdd} isPrivate />
      <Route path="/plans/edit/:idPlan" component={PlansEdit} isPrivate />

      <Route path="/students" exact component={StudentsList} isPrivate />
      <Route path="/students/add" component={StudentsAdd} isPrivate />
      <Route
        path="/students/edit/:idStudent"
        component={StudentsEdit}
        isPrivate
      />

      <Route path="/" component={SignIn} />
    </Switch>
  );
}
