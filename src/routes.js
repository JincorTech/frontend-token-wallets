import React from 'react';
import { Route } from 'react-router-dom';

import App from './containers/app/App';
import AppWrapper from './components/app/AppWrapper';
import Dashboard from './components/app/Dashboard';
import AuthWrapper from './components/auth/AuthWrapper';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import RecoveryPassword from './containers/auth/RecoveryPassword';

export const namedRoutes = {
  signIn: '/auth/signin',
  signUp: '/auth/signup',
  recoveryPassword: '/auth/recovery-password'
};

const routes = (
  <div>
    <App>
      <AuthWrapper>
        <Route path={namedRoutes.signIn} component={SignIn}/>
        <Route path={namedRoutes.signUp} component={SignUp}/>
        <Route path={namedRoutes.recoveryPassword} component={RecoveryPassword}/>
      </AuthWrapper>

      <AppWrapper>
        <Route path="/app/dashboard" component={Dashboard}/>
      </AppWrapper>
    </App>
  </div>
);

export default routes;
