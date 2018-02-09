import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import { post } from '../../utils/fetch';
import { namedRoutes } from '../../routes';

import { signIn, verifySignIn, changeStep, resetStore } from '../../redux/modules/auth/signIn';
import { login } from '../../redux/modules/app/app';


function* signInIterator({ payload }) {
  try {
    const data = yield call(post, '/user/login/initiate', payload);
    yield put(signIn.success(data));
    yield put(changeStep('verifySignIn'));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(signIn.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(signIn.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* signInSaga() {
  yield takeLatest(
    signIn.REQUEST,
    signInIterator
  );
}


function* verifySignInIterator({ payload }) {
  try {
    const data = yield call(post, '/user/login/verify', payload);
    yield put(verifySignIn.success());
    yield put(login(data.accessToken));
    yield put(resetStore());
    yield put(push(namedRoutes.dashboard));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(verifySignIn.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifySignIn.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* verifySignInSaga() {
  yield takeLatest(
    verifySignIn.REQUEST,
    verifySignInIterator
  );
}


export default function* () {
  yield all([
    fork(signInSaga),
    fork(verifySignInSaga)
  ]);
}
