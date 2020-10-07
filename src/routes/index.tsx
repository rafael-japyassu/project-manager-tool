import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInClient from '../pages/SignInClient';
import SignInDev from '../pages/SignInDev';
import SignUpDev from '../pages/SignUpDev';

import Start from '../pages/Start';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/sign-in/dev" exact component={SignInDev} />
      <Route path="/sign-up/dev" exact component={SignUpDev} />
      <Route path="/sign-in/client" exact component={SignInClient} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
