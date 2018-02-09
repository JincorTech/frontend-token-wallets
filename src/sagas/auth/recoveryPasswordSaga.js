import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import { post } from '../../utils/fetch';
import { namedRoutes } from '../../routes';

import {
  recoveryPassword,
  verifyRecoveryPassword,
  setNewPassword,
  changeStep,
  resetStore
} from '../../redux/modules/auth/recoveryPassword';


function* recoveryPasswordIterator({ payload }) {
  try {
    const { verification } = yield call(post, '/user/resetPassword/initiate', payload);
    const body = { verification, email: payload.email };
    yield put(recoveryPassword.success(body));
    yield put(changeStep('verifyRecoveryPassword'));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(recoveryPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(recoveryPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* recoveryPasswordSaga() {
  yield takeLatest(
    recoveryPassword.REQUEST,
    recoveryPasswordIterator
  );
}


function* verifyRecoveryPasswordIterator({ payload }) {
  try {
    const { resetId } = yield call(post, '/user/resetPassword/verify', payload);
    yield put(verifyRecoveryPassword.success(resetId));
    yield put(changeStep('setNewPassword'));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(verifyRecoveryPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifyRecoveryPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* verifyRecoveryPasswordSaga() {
  yield takeLatest(
    verifyRecoveryPassword.REQUEST,
    verifyRecoveryPasswordIterator
  );
}


function* setNewPasswordIterator({ payload }) {
  try {
    yield call(post, '/user/resetPassword/enter', payload);
    yield put(setNewPassword.success());
    yield put(resetStore());
    yield put(push(namedRoutes.signIn));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(setNewPassword.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(setNewPassword.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* setNewPasswordSaga() {
  yield takeLatest(
    setNewPassword.REQUEST,
    setNewPasswordIterator
  );
}


export default function* () {
  yield all([
    fork(recoveryPasswordSaga),
    fork(verifyRecoveryPasswordSaga),
    fork(setNewPasswordSaga)
  ]);
}
