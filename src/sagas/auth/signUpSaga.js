import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import { post } from '../../utils/fetch';
import { namedRoutes } from '../../routes';

import { signUp, verifySignUp, changeStep, resetStore } from '../../redux/modules/auth/signUp';
import { login } from '../../redux/modules/app/app';


function* signUpIterator({ payload }) {
  try {
    const body = { agreeTos: true, ...payload };
    const data = yield call(post, '/user', body);
    yield put(signUp.success(data));
    yield put(changeStep('verifySignUp'));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(signUp.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(signUp.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* signUpSaga() {
  yield takeLatest(
    signUp.REQUEST,
    signUpIterator
  );
}


function* verifySignUpIterator({ payload }) {
  try {
    const data = yield call(post, '/user/activate', payload);
    yield call(console.info, data);
    yield put(verifySignUp.success(data));
    yield put(login(data.accessToken));
    yield put(resetStore());
    yield put(push(namedRoutes.dashboard));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(verifySignUp.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifySignUp.failure(new SubmissionError({
        _error: e.message
      })));
    }
  }
}

function* verifySignUpSaga() {
  yield takeLatest(
    verifySignUp.REQUEST,
    verifySignUpIterator
  );
}


export default function* () {
  yield all([
    fork(signUpSaga),
    fork(verifySignUpSaga)
  ]);
}
