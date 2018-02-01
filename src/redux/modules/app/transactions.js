import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_TXS = 'app/transactions/FETCH_TXS';
export const CLOSE_TX_POPUP = 'app/transactions/CLOSE_TX_POPUP';

export const fetchTxs = createAsyncAction(FETCH_TXS);

const initialState = from({
  fetching: false,
  txs: [
    // {
    //   id: '5a003866ee3a9d0ad93aeba3',
    //   transactionHash: '0xe423dd7d40b039e4e30ad7b5520f5905c6ec8c11122c94e3858c70e7983b5d7e',
    //   timestamp: 1509963894,
    //   blockNumber: 2016136,
    //   token: {
    //     contractAddress: '0xc20f363f721fe8b35cc2aafd18df7156c775d642',
    //   },
    //   from: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
    //   to: '0x446cd17EE68bD5A567d43b696543615a94b01760',
    //   amount: '1000',
    //   status: 'confirmed',
    //   type: 'erc20_transfer',
    //   direction: 'out'
    // },
    // {
    //   id: '5a004158b8442c0e1400fc4f',
    //   transactionHash: '0xcdf4a9dc086bcb3308475ced42b772879fd052822693aee509f81493412d460f',
    //   timestamp: 1509966175,
    //   blockNumber: 2016339,
    //   token: {
    //     contractAddress: '0xc20f363f721fe8b35cc2aafd18df7156c775d642',
    //     symbol: 'SAV',
    //     name: 'Super Activate V',
    //     decimals: 18
    //   },
    //   from: '0x446cd17EE68bD5A567d43b696543615a94b01760',
    //   to: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
    //   amount: '1000',
    //   status: 'confirmed',
    //   type: 'erc20_transfer',
    //   direction: 'out'
    // },
    // {
    //   id: '5a004dee3663160140d19291',
    //   transactionHash: '0xe5d5ed39bf9eb64d3e56bf4a9d89b7f2bb026fc02c0d149027757936a1e7b6c7',
    //   timestamp: 1509969394,
    //   blockNumber: 2016578,
    //   from: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
    //   to: '0x446cd17EE68bD5A567d43b696543615a94b01760',
    //   amount: '2',
    //   status: 'confirmed',
    //   type: 'eth_transfer',
    //   direction: 'out'
    // },
    // {
    //   id: '5a004e003663160140d19292',
    //   transactionHash: '0x057c0846b7b7fa54c10544c595ec2e476c830220f0ea1fbb52215a3a44deade1',
    //   timestamp: 1509969394,
    //   blockNumber: 2016578,
    //   from: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
    //   to: '0x446cd17EE68bD5A567d43b696543615a94b01760',
    //   amount: '2',
    //   status: 'confirmed',
    //   type: 'eth_transfer',
    //   direction: 'out'
    // },
    // {
    //   id: '5a00669ab21e84067aac8bf6',
    //   transactionHash: '0xb87ef88fe75724ed067413de7c48f4c745cfafa709f42884308663cb53a8e2a0',
    //   timestamp: 1509975754,
    //   from: '0x54c0B824d575c60F3B80ba1ea3A0cCb5EE3F56eA',
    //   to: '0xBd0cb067A75C23EFB290B4e223059Af8E4AF4fd8',
    //   amount: '5',
    //   status: 'pending',
    //   type: 'eth_transfer',
    //   direction: 'in'
    // }
  ]
});

export default createReducer({
  [fetchTxs.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchTxs.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      txs: payload
    })
  ),

  [fetchTxs.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
