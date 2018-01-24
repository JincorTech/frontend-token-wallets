import { from } from 'seamless-immutable';
import { createReducer, createSubmitAction, createAction } from '../../../utils/actions';

export const SIGN_UP = 'auth/signUp/SIGN_UP';
export const VERIFY_SIGN_UP = 'auth/signUp/VERIFY_SIGN_UP';
export const CHANGE_STEP = 'auth/signUp/CHANGE_STEP';
export const RESET_STORE = 'auth/signUp/RESET_STORE';

export const signUp = createSubmitAction(SIGN_UP);
export const verifySignUp = createSubmitAction(VERIFY_SIGN_UP);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  spinner: false,
  step: 'signUp'
});

export default createReducer({
  [signUp.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [signUp.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [signUp.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [verifySignUp.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [verifySignUp.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [verifySignUp.FAILURE]: (state) => (
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
