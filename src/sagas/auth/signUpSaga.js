import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { post } from '../../utils/fetch';

import { signUp, verifySignUp, changeStep, resetStore } from '../../redux/modules/auth/signUp';
import { login } from '../../redux/modules/app/app';

function* signUpIterator({ payload }) {
  try {
    const body = { agreeTos: true, ...payload };
    const data = yield call(post, '/user', body);
    yield put(signUp.success(data));
    yield put(changeStep('verifySignUp'));
  } catch (e) {
    yield call(console.error, e);
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
    yield put(push('/app/dashboard'));
  } catch (e) {
    yield call(console.error, e);
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
