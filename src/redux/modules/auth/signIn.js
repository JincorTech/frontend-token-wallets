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
  fetching: false,
  step: 'signIn',
  user: {
    accessToken: '',
    isVerified: false,
    verification: {
      verificationId: '',
      consumer: '',
      expiredOn: 0,
      status: 0,
      method: ''
    }
  }
});

export default createReducer({
  [signIn.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [signIn.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      user: payload
    })
  ),

  [signIn.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySignIn.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifySignIn.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySignIn.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [CHANGE_STEP]: (state, { payload }) => (
    state.merge({
      step: payload
    })
  ),

  [RESET_STORE]: (state) => state.merge(initialState)
}, initialState);
