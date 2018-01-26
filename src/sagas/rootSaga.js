import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import signUpSaga from './auth/signUpSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(signUpSaga)
  ]);
}
