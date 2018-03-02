import { from } from 'seamless-immutable';
import { createReducer, createAction, createSubmitAction } from '../../../utils/actions';

export const INIT_CHANGE_PAYMENT_PASSWORD = 'app/changePaymentPassword/INIT_CHANGE_PAYMENT_PASSWORD';
export const VERIFY_CHANGE_PAYMENT_PASSWORD = 'app/changePaymentPassword/VERIFY_CHANGE_PAYMENT_PASSWORD';
export const CHANGE_STEP = 'app/changePaymentPassword/CHANGE_STEP';
export const RESET_STORE = 'app/changePaymentPassword/RESET_STORE';

export const initChangePaymentPassword = createSubmitAction(INIT_CHANGE_PAYMENT_PASSWORD);
export const verifyChangePaymentPassword = createSubmitAction(VERIFY_CHANGE_PAYMENT_PASSWORD);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  fetching: false,
  step: 'changePaymentPassword',
  verification: {
    verificationId: '',
    method: 'email'
  }
});

export default createReducer({
  [initChangePaymentPassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initChangePaymentPassword.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      verification: payload.verification
    })
  ),

  [initChangePaymentPassword.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyChangePaymentPassword.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifyChangePaymentPassword.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyChangePaymentPassword.FAILURE]: (state) => (
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
