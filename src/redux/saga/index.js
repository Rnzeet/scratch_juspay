import { all, call, put, takeEvery } from 'redux-saga/effects';

export function* moveCharLoading(data) {

    try {

    } catch (err) {

    }
}

function* watcherSaga() {

    // yield takeEvery("MOVE_CHARACTER",moveCharLoading)
}

export default function* rootSaga() {
    yield all[watcherSaga()];
}