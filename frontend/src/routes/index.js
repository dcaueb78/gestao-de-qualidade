import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import NonConformityDetails from '../pages/NonConformityDetails';
import EditNonConformity from '../pages/EditNonConformity';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route
        path="/nonconformity/details"
        exact
        component={NonConformityDetails}
      />
      <Route path="/nonconformity/edit" exact component={EditNonConformity} />
    </Switch>
  );
}
