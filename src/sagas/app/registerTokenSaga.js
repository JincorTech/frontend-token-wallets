import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { get, post } from '../../utils/fetch';

import { fetchTokenInfo, registerToken, changeStep, resetStore } from '../../redux/modules/app/registerToken';
import { fetchBalances } from '../../redux/modules/app/dashboard';


function* fetchTokenInfoIterator({ payload }) {
  try {
    const data = yield call(get, `/dashboard/erc20TokenInfo?contractAddress=${payload.contractAddress}`);
    yield put(fetchTokenInfo.success(data));
    yield put(changeStep('registerToken'));
  } catch (e) {
    if (e.status === 404) {
      yield put(fetchTokenInfo.success(payload));
      yield put(changeStep('registerToken'));
    } else {
      // eslint-disable-next-line
      if (e.error.isJoi) {
        yield put(fetchTokenInfo.failure(new SubmissionError({
          _error: e.error.details[0].message
        })));
      } else {
        yield put(fetchTokenInfo.failure(new SubmissionError({
          _error: e.message
        })));
      }
    }
  }
}

function* fetchTokenInfoSaga() {
  yield takeLatest(
    fetchTokenInfo.REQUEST,
    fetchTokenInfoIterator
  );
}


function* registerTokenIterator({ payload }) {
  try {
    yield call(post, '/user/me/erc20token/register', payload);
    yield put(registerToken.success());
    yield put(fetchBalances());
    yield put(resetStore());
  } catch (e) {
    if (e.error.isJoi) {
      yield put(registerToken.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(registerToken.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* registerTokenSaga() {
  yield takeLatest(
    registerToken.REQUEST,
    registerTokenIterator
  );
}


export default function* () {
  yield all([
    fork(fetchTokenInfoSaga),
    fork(registerTokenSaga)
  ]);
}
