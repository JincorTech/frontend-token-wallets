import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_BALANCES = 'app/dashboard/FETCH_BALANCES';

export const fetchBalances = createAsyncAction(FETCH_BALANCES);

const initialState = from({
  ethBalance: '',
  lbrsBalance: '',
  erc20TokensBalance: []
});

export default createReducer({
  [fetchBalances.SUCCESS]: (state, { payload }) => (
    state.merge({
      ...payload
    })
  )
}, initialState);
