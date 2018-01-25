import React from 'react';
import { Route } from 'react-router-dom';

import App from './containers/app/App';
import AppWrapper from './containers/app/AppWrapper';
import AuthWrapper from './components/auth/AuthWrapper';

export const namedRoutes = {
  auth: '/auth',
  signIn: '/auth/signin',
  signUp: '/auth/signup',
  recoveryPassword: '/auth/recovery-password',
  app: '/app',
  dashboard: '/app/dashboard',
  tokenTransfer: '/app/transfer',
  transactions: '/app/transactions',
  settings: '/app/settings'
};

const routes = (
  <div>
    <App>
      <Route path={namedRoutes.auth} component={AuthWrapper}/>
      <Route path={namedRoutes.app} component={AppWrapper}/>
    </App>
  </div>
);

export default routes;
