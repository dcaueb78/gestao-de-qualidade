import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import NonConformityDetails from '../pages/NonConformityDetails';
import CreateCorrectiveActions from '../pages/CreateCorrectiveActions';
import CreateNonConformity from '../pages/CreateNonConformity';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route
        path="/nonconformity/details/:id"
        exact
        component={NonConformityDetails}
        isPrivate
      />
      <Route
        path="/nonconformity/create"
        exact
        component={CreateNonConformity}
        isPrivate
      />
      <Route
        path="/corrective-actions/:id/create"
        exact
        component={CreateCorrectiveActions}
        isPrivate
      />

      <Route path="/" component={() => <h1>Erro 404</h1>} />
    </Switch>
  );
}
