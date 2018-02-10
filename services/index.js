import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(2000)
}

export function* watchIncrementAsync() {
  yield takeEvery('ASYNC_ACTION', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
  ])
}
