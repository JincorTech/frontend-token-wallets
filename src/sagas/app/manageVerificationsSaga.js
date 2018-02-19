import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { post } from '../../utils/fetch';

import { setVerifications, verifySetVerifications, changeStep, resetStore } from '../../redux/modules/app/manageVerifications';


function* setVerificationsIterator({ payload }) {
  try {
    const data = yield call(post, '/user/preferences/verifications/initiate', { verifications: payload });
    yield put(setVerifications.success(data));
    yield put(changeStep('verifyManageNotifications'));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(setVerifications.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(setVerifications.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* setVerificationsSaga() {
  yield takeLatest(
    setVerifications.REQUEST,
    setVerificationsIterator
  );
}


function* verifySetVerificationsIterator({ payload }) {
  try {
    yield call(post, '/user/preferences/verifications/verify', payload);
    yield put(verifySetVerifications.success());
    yield put(resetStore());
  } catch (e) {
    if (e.error.isJoi) {
      yield put(verifySetVerifications.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifySetVerifications.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* verifySetVerificationsSaga() {
  yield takeLatest(
    verifySetVerifications.REQUEST,
    verifySetVerificationsIterator
  );
}


export default function* () {
  yield all([
    fork(setVerificationsSaga),
    fork(verifySetVerificationsSaga)
  ]);
}
