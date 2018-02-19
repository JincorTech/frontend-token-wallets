import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { SubmissionError, reset } from 'redux-form';
import { post } from '../../utils/fetch';

import { initChangePassword, verifyChangePassword, changeStep, resetStore } from '../../redux/modules/app/changePassword';


function* initChangePasswordIterator({ payload }) {
  try {
    const data = yield call(post, '/user/me/changePassword/initiate', payload);

    if (data.verification.method === 'inline') {
      const verifyData = yield call(post, '/user/me/changePassword/verify', {
        verification: { verificationId: data.verification.verificationId, code: '777777' }
      });
      yield put(initChangePassword.success(verifyData));
      yield put(reset('changePassword'));
    } else {
      yield put(initChangePassword.success(data));
      yield put(changeStep('verifyChangePassword'));
    }
  } catch (e) {
    if (e.error.isJoi) {
      yield put(initChangePassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(initChangePassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* initChangePasswordSaga() {
  yield takeLatest(
    initChangePassword.REQUEST,
    initChangePasswordIterator
  );
}


function* verifyChangePasswordIterator({ payload }) {
  try {
    yield call(post, '/user/me/changePassword/verify', payload);
    yield put(verifyChangePassword.success());
    yield put(resetStore());
  } catch (e) {
    if (e.error.isJoi) {
      yield put(verifyChangePassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifyChangePassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* verifyChangePasswordSaga() {
  yield takeLatest(
    verifyChangePassword.REQUEST,
    verifyChangePasswordIterator
  );
}


export default function* () {
  yield all([
    fork(initChangePasswordSaga),
    fork(verifyChangePasswordSaga)
  ]);
}
