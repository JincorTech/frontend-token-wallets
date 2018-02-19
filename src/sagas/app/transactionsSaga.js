import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { get } from '../../utils/fetch';

import { fetchTxs } from '../../redux/modules/app/transactions';
import { logout } from '../../redux/modules/app/app';


function* fetchTxsIterator() {
  try {
    const data = yield call(get, '/dashboard/transactions');
    yield put(fetchTxs.success(data));
  } catch (e) {
    if (e.status === 401) {
      yield put(logout());
    } else {
      yield call(console.log, e);
    }
  }
}

function* fetchTxsSaga() {
  yield takeLatest(
    fetchTxs.REQUEST,
    fetchTxsIterator
  );
}


export default function* () {
  yield all([
    fork(fetchTxsSaga)
  ]);
}
