import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

const locationHelper = locationHelperBuilder({});

export const isAuth = connectedRouterRedirect({
  redirectPath: '/auth/signin',
  authenticatedSelector: (state) => state.app.app.authorized,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export const isNotAuth = connectedRouterRedirect({
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/app/dashboard',
  allowRedirectBack: false,
  authenticatedSelector: (state) => !state.app.app.authorized,
  wrapperDisplayName: 'UserIsNotAuthenticated'
});
