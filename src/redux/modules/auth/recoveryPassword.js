import { from } from 'seamless-immutable';
import { createReducer, createSubmitAction, createAction } from '../../../utils/actions';

export const RECOVERY_PASSWORD = 'auth/recoveryPassword/RECOVERY_PASSWORD';
export const VERIFY_RECOVERY_PASSWORD = 'auth/recoveryPassword/VERIFY_RECOVERY_PASSWORD';
export const SET_NEW_PASSWORD = 'auth/recoveryPassword/SET_NEW_PASSWORD';
export const CHANGE_STEP = 'auth/recoveryPassword/CHANGE_STEP';
export const RESET_STORE = 'auth/recoveryPassword/RESET_STORE';

export const recoveryPassword = createSubmitAction(RECOVERY_PASSWORD);
export const verifyRecoveryPassword = createSubmitAction(VERIFY_RECOVERY_PASSWORD);
export const setNewPassword = createSubmitAction(SET_NEW_PASSWORD);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  spinner: false,
  step: 'recoveryPassword'
});

export default createReducer({
  [recoveryPassword.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [recoveryPassword.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [recoveryPassword.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [verifyRecoveryPassword.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [verifyRecoveryPassword.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [verifyRecoveryPassword.FAILURE]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [setNewPassword.REQUEST]: (state) => (
    state.merge({
      spinner: true
    })
  ),

  [setNewPassword.SUCCESS]: (state) => (
    state.merge({
      spinner: false
    })
  ),

  [setNewPassword.FAILURE]: (state) => (
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
