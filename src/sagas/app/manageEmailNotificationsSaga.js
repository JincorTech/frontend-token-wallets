import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { post } from '../../utils/fetch';

import { setNotifications } from '../../redux/modules/app/manageEmailNotifications';


function* setNotificationsIterator({ payload }) {
  try {
    yield call(post, '/user/preferences/notifications', { notifications: payload });
    yield put(setNotifications.success());
  } catch (e) {
    yield call(console.log, e);
  }
}

function* setNotificationsSaga() {
  yield takeLatest(
    setNotifications.REQUEST,
    setNotificationsIterator
  );
}


export default function* () {
  yield all([
    fork(setNotificationsSaga)
  ]);
}
