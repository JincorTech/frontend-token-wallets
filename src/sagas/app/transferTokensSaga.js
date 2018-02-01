import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
// import { SubmissionError } from 'redux-form';
// import { get, post } from '../../utils/fetch';

import { initTransferTokens, verifyTransferTokens, changeStep, resetStore } from '../../redux/modules/app/transferTokens';


const transformTransferTokensData = (req) => {
  if (req.currency === 'eth_transfer') {
    return {
      type: 'eth_transfer',
      amount: req.amount,
      mnemonic: req.mnemonic,
      to: req.to
    };
  }

  return {
    type: 'erc20_transfer',
    contractAddress: req.currency,
    amount: req.amount,
    mnemonic: req.mnemonic,
    to: req.to
  };
};

function* initTransferTokensIterator({ payload }) {
  try {
    yield call(console.log, transformTransferTokensData(payload));
    yield put(changeStep('registerToken'));
  } catch (e) {
    yield call(console.log, e);
  }
}

function* fetchTokenInfoSaga() {
  yield takeLatest(
    initTransferTokens.REQUEST,
    initTransferTokensIterator
  );
}


function* verifyTransferTokensIterator({ payload }) {
  try {
    yield call(console.log, payload);
    // yield put(registerToken.success());
    yield put(resetStore());
  } catch (e) {
    // yield put(registerToken.failure(new SubmissionError({ _error: e.message })));
  }
}

function* verifyTransferTokensSaga() {
  yield takeLatest(
    verifyTransferTokens.REQUEST,
    verifyTransferTokensIterator
  );
}


export default function* () {
  yield all([
    fork(fetchTokenInfoSaga),
    fork(verifyTransferTokensSaga)
  ]);
}
