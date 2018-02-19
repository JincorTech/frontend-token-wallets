import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import appSaga from './app/appSaga';
import dashboardSaga from './app/dashboardSaga';
import transactionsSaga from './app/transactionsSaga';
import registerTokenSaga from './app/registerTokenSaga';
import transferTokensSaga from './app/transferTokensSaga';
import changePassword from './app/changePasswordSaga';
import signUpSaga from './auth/signUpSaga';
import signInSaga from './auth/signInSaga';
import recoveryPasswordSaga from './auth/recoveryPasswordSaga';
import manageEmailNotificationsSaga from './app/manageEmailNotificationsSaga';
import manageVerifications from './app/manageVerificationsSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(appSaga),
    fork(dashboardSaga),
    fork(transactionsSaga),
    fork(registerTokenSaga),
    fork(transferTokensSaga),
    fork(changePassword),
    fork(signUpSaga),
    fork(signInSaga),
    fork(recoveryPasswordSaga),
    fork(manageEmailNotificationsSaga),
    fork(manageVerifications)
  ]);
}
