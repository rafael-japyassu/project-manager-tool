import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignInClient from '../pages/SignInClient';
import SignInDev from '../pages/SignInDev';
import SignUpDev from '../pages/SignUpDev';

import Start from '../pages/Start';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/sign-in/dev" exact component={SignInDev} />
      <Route path="/sign-up/dev" exact component={SignUpDev} />
      <Route path="/sign-in/client" exact component={SignInClient} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
