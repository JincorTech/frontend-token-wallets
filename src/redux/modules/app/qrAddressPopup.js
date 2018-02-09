import { from } from 'seamless-immutable';
import { createReducer, createAction } from '../../../utils/actions';

export const OPEN_QR_ADDRESS_POPUP = 'app/qrAddressPopup/OPEN_QR_ADDRESS_POPUP';
export const CLOSE_QR_ADDRESS_POPUP = 'app/qrAddressPopup/CLOSE_QR_ADDRESS_POPUP';
export const TOGGLE_QR_ADDRESS_POPUP = 'app/qrAddressPopup/TOGGLE_QR_ADDRESS_POPUP';

export const openQrAddressPopup = createAction(OPEN_QR_ADDRESS_POPUP);
export const closeQrAddressPopup = createAction(CLOSE_QR_ADDRESS_POPUP);
export const toggleQrAddressPopup = createAction(TOGGLE_QR_ADDRESS_POPUP);

const initialState = from({
  open: false,
  address: ''
});

export default createReducer({
  [OPEN_QR_ADDRESS_POPUP]: (state, { payload }) => (
    state.merge({
      open: true,
      address: payload
    })
  ),

  [TOGGLE_QR_ADDRESS_POPUP]: (state) => (
    state.merge({
      open: !state.open
    })
  ),

  [CLOSE_QR_ADDRESS_POPUP]: (state) => state.merge(initialState)
}, initialState);
