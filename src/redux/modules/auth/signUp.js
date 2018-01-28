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
  fetching: false,
  step: 'signUp',
  user: {
    agreeTos: true,
    defaultVerificationMethod: 'email',
    email: '',
    id: '',
    isVerified: false,
    name: '',
    verification: {
      id: '',
      method: 'email'
    }
  }
});

export default createReducer({
  [signUp.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [signUp.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      user: payload
    })
  ),

  [signUp.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySignUp.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifySignUp.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySignUp.FAILURE]: (state) => (
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
