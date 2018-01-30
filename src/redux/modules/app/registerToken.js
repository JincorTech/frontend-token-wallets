import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const FETCH_TOKEN_INFO = 'app/registerToken/FETCH_TOKEN_INFO';
export const REGISTER_TOKEN = 'app/registerToken/REGISTER_TOKEN';
export const CHANGE_STEP = 'app/registerToken/CHANGE_STEP';
export const RESET_STORE = 'app/registerToken/RESET_STORE';

export const fetchTokenInfo = createAsyncAction(FETCH_TOKEN_INFO);
export const registerToken = createAsyncAction(REGISTER_TOKEN);
export const changeStep = createAction(CHANGE_STEP);
export const resetStore = createAction(RESET_STORE);

const initialState = from({
  fetching: false,
  step: 'registerTokenAddress',
  token: {
    contractAddress: '',
    name: '',
    symbol: '',
    decimals: 18
  }
});

export default createReducer({
  [fetchTokenInfo.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchTokenInfo.SUCCESS]: (state, { payload }) => (
    state.mege({
      fetching: false,
      token: payload
    })
  ),

  [fetchTokenInfo.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [registerToken.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [registerToken.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [registerToken.FAILURE]: (state) => (
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
