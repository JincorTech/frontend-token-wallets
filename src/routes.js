import React from 'react';
import { Route } from 'react-router';

import App from './containers/app/App';
import AppWrapper from './components/app/AppWrapper';
import Dashboard from './components/app/Dashboard';
import AuthWrapper from './components/auth/AuthWrapper';
import SignIn from './components/auth/SignIn';

const routes = (
  <div>
    <App>
      <AuthWrapper>
        <Route path="/auth/signin" component={SignIn}/>
      </AuthWrapper>

      <AppWrapper>
        <Route path="/app/dashboard" component={Dashboard}/>
      </AppWrapper>
    </App>
  </div>
);

export default routes;
