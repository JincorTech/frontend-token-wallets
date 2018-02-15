import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { post } from '../../utils/fetch';

import { initTransferTokens, verifyTransferTokens, changeStep, resetStore } from '../../redux/modules/app/transferTokens';


const transformTransferTokensData = (req) => {
  const res = {
    type: 'eth_transfer',
    amount: Number(req.amount),
    mnemonic: req.mnemonic,
    to: req.to,
    paymentPassword: req.paymentPassword
  };

  if (req.currency === 'eth_transfer') {
    res.type = req.currency;
  }

  if (req.currency === 'erc20_transfer') {
    res.type = res.currency;
    res.contractAddress = req.contractAddress;
  }

  if (req.gas) {
    res.gas = req.gas;
  }

  if (req.gasPrice) {
    res.gasPrice = req.gasPrice;
  }

  return res;
};

function* initTransferTokensIterator({ payload }) {
  try {
    const data = yield call(post, '/dashboard/transaction/initiate', transformTransferTokensData(payload));
    yield put(initTransferTokens.success(data));
    yield put(changeStep('verifyTransferTokens'));
  } catch (e) {
    if (e.error.isJoi) {
      yield put(initTransferTokens.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(initTransferTokens.failure(new SubmissionError({
        _error: e.message
      })));
    }
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
    yield call(post, '/dashboard/transaction/verify', payload);
    yield put(verifyTransferTokens.success());
    yield put(resetStore());
  } catch (e) {
    if (e.error.isJoi) {
      yield put(verifyTransferTokens.failure(new SubmissionError({
        _error: e.error.details[0].message
      })));
    } else {
      yield put(verifyTransferTokens.failure(new SubmissionError({
        _error: e.message
      })));
    }
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
