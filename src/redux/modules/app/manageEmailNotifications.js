import { from } from 'seamless-immutable';
import { createReducer, createSubmitAction } from '../../../utils/actions';

export const SET_NOTIFICATIONS = 'app/manageEmailNotifications/SET_NOTIFICATIONS';

export const setNotifications = createSubmitAction(SET_NOTIFICATIONS);

const initialState = from({
  fetching: false
});

export default createReducer({
  [setNotifications.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [setNotifications.SUCCESS]: (state) => (
    state.merge({
      fetching: false
    })
  ),

  [setNotifications.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  )
}, initialState);
