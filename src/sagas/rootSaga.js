import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import appSaga from './app/appSaga';
import signUpSaga from './auth/signUpSaga';
import signInSaga from './auth/signInSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(appSaga),
    fork(signUpSaga),
    fork(signInSaga)
  ]);
}
