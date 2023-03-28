import { all } from 'redux-saga/effects';
import { watchUserRequested } from './loginSaga';
import { watchProductRequest } from './productSaga';
import { watchPostsRequest } from './postSaga';

//call hết các watcher trong các sagas con và nạp vào đây
export function* rootSaga() {
    yield all([watchUserRequested(), watchProductRequest(), watchPostsRequest()]);
}
