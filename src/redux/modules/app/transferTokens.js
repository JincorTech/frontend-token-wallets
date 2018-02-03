import { from } from 'seamless-immutable';
import { createReducer, createSubmitAction, createAction } from '../../../utils/actions';

export const INIT_TRANSFER_TOKENS = 'app/transferTokens/INIT_TRANSFER_TOKENS';
export const VERIFY_TRANSFER_TOKENS = 'app/transferTokens/VERIFY_TRANSFER_TOKENS';
export const CHANGE_STEP = 'app/transferTokens/CHANGE_STEP';
export const RESET_STORE = 'app/transferTokens/RESET_STORE';

export const initTransferTokens = createSubmitAction(INIT_TRANSFER_TOKENS);
export const verifyTransferTokens = createSubmitAction(VERIFY_TRANSFER_TOKENS);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  fetching: false,
  step: 'transferTokens',
  verification: {
    verificationId: '',
    method: 'email'
  }
});

export default createReducer({
  [initTransferTokens.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [initTransferTokens.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      verification: payload.verification
    })
  ),

  [initTransferTokens.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyTransferTokens.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [verifyTransferTokens.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [verifyTransferTokens.FAILURE]: (state) => (
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
