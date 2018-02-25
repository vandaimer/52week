import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'


function* watchAddToSavingsAccountAmount () {
  yield takeEvery('ASYNC_ADD_TO_SAVINGS_ACCOUNT_AMOUNT', function* (action) {
    yield put({type: 'ADD_TO_SAVINGS_ACCOUNT_AMOUNT', value: action.value})
  })
};

function* watchRemoveFromSavingsAccountAmount () {
  yield takeEvery('ASYNC_REMOVE_FROM_SAVINGS_ACCOUNT_AMOUNT', function* (action) {
    yield put({type: 'REMOVE_FROM_SAVINGS_ACCOUNT_AMOUNT', value: action.value})
  })
};

export default function* rootSaga() {
  yield all([
    watchAddToSavingsAccountAmount(),
    watchRemoveFromSavingsAccountAmount(),
  ])
}
