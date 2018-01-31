import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_TX_POPUP = 'app/txPopup/OPEN_TX_POPUP';
export const CLOSE_TX_POPUP = 'app/txPopup/CLOSE_TX_POPUP';
export const TOGGLE_TX_POPUP = 'app/txPopup/TOGGLE_TX_POPUP';

export const openTxPopup = createAction(OPEN_TX_POPUP);
export const closeTxPopup = createAction(CLOSE_TX_POPUP);
export const toggleTxPopup = createAction(TOGGLE_TX_POPUP);

const initialState = from({
  open: false,
  tx: {
    id: '',
    transactionHash: '',
    timestamp: 0,
    blockNumber: 0,
    from: '',
    to: '',
    amount: 0,
    status: '',
    type: '',
    direction: '',
    token: {
      contractAddress: '',
      symbol: '',
      name: '',
      decimals: 0
    }
  }
});

export default createReducer({
  [OPEN_TX_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      tx: payload
    })
  ),

  [TOGGLE_TX_POPUP]: (state) => (
    state.merge({
      open: !state.open
    })
  ),

  [CLOSE_TX_POPUP]: (state) => state.merge(initialState)
}, initialState);
