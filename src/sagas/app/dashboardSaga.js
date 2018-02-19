import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { get } from '../../utils/fetch';

import { fetchBalances } from '../../redux/modules/app/dashboard';
import { logout } from '../../redux/modules/app/app';


function* fetchBalancesIterator() {
  try {
    const data = yield call(get, '/dashboard');
    const lbrsBalance = data.erc20TokensBalance.reduce((acc, item) =>
      (item.symbol === 'LBRS'
        ? item.balance
        : acc), '0');
    const body = {
      lbrsBalance,
      ...data
    };
    yield put(fetchBalances.success(body));
  } catch (e) {
    if (e.status === 401) {
      yield put(logout());
    } else {
      yield call(console.log, e);
    }
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
