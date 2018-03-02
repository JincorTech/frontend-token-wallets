import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { SubmissionError, reset } from 'redux-form';
import { post } from '../../utils/fetch';

import { initChangePaymentPassword, verifyChangePaymentPassword, changeStep, resetStore } from '../../redux/modules/app/changePaymentPassword';


function* initChangePaymentPasswordIterator({ payload }) {
  try {
    const data = yield call(post, '/user/me/changePaymentPassword/initiate', payload);

    if (data.verification.method === 'inline') {
      const verifyData = yield call(post, '/user/me/changePaymentPassword/verify', {
        verification: { verificationId: data.verification.verificationId, code: '777777' }
      });
      yield put(initChangePaymentPassword.success(verifyData));
      yield put(reset('changePaymentPassword'));
    } else {
      yield put(initChangePaymentPassword.success(data));
      yield put(changeStep('verifyChangePaymentPassword'));
    }
  } catch (e) {
    if (e.error.isJoi) {
      yield put(initChangePaymentPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(initChangePaymentPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* initChangePaymentPasswordSaga() {
  yield takeLatest(
    initChangePaymentPassword.REQUEST,
    initChangePaymentPasswordIterator
  );
}


function* verifyChangePaymentPasswordIterator({ payload }) {
  try {
    yield call(post, '/user/me/changePaymentPassword/verify', payload);
    yield put(verifyChangePaymentPassword.success());
    yield put(resetStore());
  } catch (e) {
    if (e.error.isJoi) {
      yield put(verifyChangePaymentPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifyChangePaymentPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* verifyChangePaymentPasswordSaga() {
  yield takeLatest(
    verifyChangePaymentPassword.REQUEST,
    verifyChangePaymentPasswordIterator
  );
}


export default function* () {
  yield all([
    fork(initChangePaymentPasswordSaga),
    fork(verifyChangePaymentPasswordSaga)
  ]);
}
