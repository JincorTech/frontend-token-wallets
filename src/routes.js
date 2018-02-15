import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { isAuth, isNotAuth } from './utils/auth/authWrappers';

import App from './containers/app/App';
import AppWrapper from './containers/app/AppWrapper';
import AuthWrapper from './components/auth/AuthWrapper';

export const namedRoutes = {
  base: '/',
  auth: '/auth',
  signIn: '/auth/signin',
  signUp: '/auth/signup',
  recoveryPassword: '/auth/recovery-password',
  app: '/app',
  dashboard: '/app/dashboard',
  tokenTransfer: '/app/transfer',
  transactions: '/app/transactions',
  settings: '/app/settings',

  // empty mock-containers
  analytics: '/app/analytics',
  blog: '/app/blog',
  help: '/app/help',
  invoices: '/app/invoices',
  marketplace: '/app/marketplace',
  projects: '/app/projects',
  ratings: '/app/ratings',
  support: '/app/support'
};

const AuthWrapped = isNotAuth(AuthWrapper);
const AppWrapped = isAuth(AppWrapper);

const routes = (
  <div>
    <App>
      <Switch>
        <Route path={namedRoutes.auth} component={AuthWrapped}/>
        <Route path={namedRoutes.app} component={AppWrapped}/>
        <Redirect from={namedRoutes.base} to={namedRoutes.signIn}/>
      </Switch>
    </App>
  </div>
);

export default routes;
