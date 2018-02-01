import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import app from './modules/app/app';
import dashboard from './modules/app/dashboard';
import registerTokenReducer from './modules/app/registerToken';
import transactions from './modules/app/transactions';
import txPopup from './modules/app/txPopup';
import transferTokens from './modules/app/transferTokens';
import signInReducer from './modules/auth/signIn';
import signUpReducer from './modules/auth/signUp';
import recoveryPasswordReducer from './modules/auth/recoveryPassword';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    app,
    dashboard,
    registerToken: registerTokenReducer,
    transactions,
    txPopup,
    transferTokens
  }),

  auth: combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    recoveryPassword: recoveryPasswordReducer
  })
});
