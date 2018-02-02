import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const INIT_CHANGE_PASSWORD = 'app/changePassword/INIT_CHANGE_PASSWORD';
export const VERIFY_CHANGE_PASSWORD = 'app/changePassword/VERIFY_CHANGE_PASSWORD';
export const CHANGE_STEP = 'app/changePassword/CHANGE_STEP';
export const RESET_STORE = 'app/changePassword/RESET_STORE';

export const initChangePassword = createSubmitAction(INIT_CHANGE_PASSWORD);
export const verifyChangePassword = createSubmitAction(VERIFY_CHANGE_PASSWORD);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  fetching: false,
  step: 'changePassword',
  verification: {
    verificationId: '',
    method: 'email'
  }
});

export default createReducer({
  [initChangePassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initChangePassword.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      verification: payload.verification
    })
  ),

  [initChangePassword.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyChangePassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifyChangePassword.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyChangePassword.FAILURE]: (state) => (
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
