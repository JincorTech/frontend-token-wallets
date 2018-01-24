import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import app from './modules/app/app';

import signInReducer from './modules/auth/signIn';
import signUpReducer from './modules/auth/signUp';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    app
  }),

  auth: combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
  })
});
