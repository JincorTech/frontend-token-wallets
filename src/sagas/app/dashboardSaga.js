import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { get } from '../../utils/fetch';

import { fetchBalances } from '../../redux/modules/app/dashboard';


function* fetchBalancesIterator() {
  try {
    const data = yield call(get, '/dashboard');
    yield put(fetchBalances.success(data));
  } catch (e) {
    yield call(console.error, e);
  }
}

function* fetchBalancesSaga() {
  yield takeLatest(
    fetchBalances.REQUEST,
    fetchBalancesIterator
  );
}


export default function* () {
  yield all([
    fork(fetchBalancesSaga)
  ]);
}
