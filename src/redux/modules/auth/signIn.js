import { from } from 'seamless-immutable';
import { createReducer, createSubmitAction, createAction } from '../../../utils/actions';

export const SIGN_IN = 'auth/signIn/SIGN_IN';
export const VERIFY_SIGN_IN = 'auth/singIn/VERIFY_SIGN_IN';
export const CHANGE_STEP = 'auth/signIn/CHANGE_STEP';
export const RESET_STORE = 'auth/signIn/RESET_STORE';

export const signIn = createSubmitAction(SIGN_IN);
export const verifySignIn = createSubmitAction(VERIFY_SIGN_IN);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  spinner: false,
  step: 'signIn'
});

export default createReducer({
  [signIn.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [signIn.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [signIn.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [verifySignIn.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [verifySignIn.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [verifySignIn.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [CHANGE_STEP]: (state, { payload }) => (
    state.merge({
      step: payload
    })
  ),

  [RESET_STORE]: (state) => state.merge(initialState)
}, initialState);
