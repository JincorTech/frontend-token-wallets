import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
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
    yield call(console.error, e);
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
    yield call(console.error, e);
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
