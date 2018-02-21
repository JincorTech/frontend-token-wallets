import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const SET_VERIFICATIONS = 'app/manageNotifications/SET_VERIFICATIONS';
export const VERIFY_SET_VERIFICATIONS = 'app/manageVerifications/VERIFY_SET_VERIFICATIONS';
export const CHANGE_STEP = 'app/manageVerifications/CHANGE_STEP';
export const RESET_STORE = 'app/manageVerifications/RESET_STORE';

export const setVerifications = createSubmitAction(SET_VERIFICATIONS);
export const verifySetVerifications = createSubmitAction(VERIFY_SET_VERIFICATIONS);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  fetching: false,
  step: 'manageNotifications',
  verification: {
    verificationId: '',
    method: 'email'
  }
});

export default createReducer({
  [setVerifications.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [setVerifications.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      verification: payload.verification
    })
  ),

  [setVerifications.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySetVerifications.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifySetVerifications.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifySetVerifications.FAILURE]: (state) => (
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
