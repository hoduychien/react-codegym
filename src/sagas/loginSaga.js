import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getUser() {
    try {
        const response = yield axios.get('http://localhost:3004/users');
        const data = response.data.body;
        yield put({ type: 'FETCH_USER_SUCCESS', data });
    } catch (e) {
        yield put({ type: 'FETCH_USER_ERROR', e });
    }
}

function* authSagaFun(action) {
    try {
        const user = action.payload;
        if (user.email === 'chienhoo20@gmail.com' && user.password == '123456') {
            yield put({ type: 'LOGIN_SUCCESS', payload: user });
            yield put({ type: 'FETCH_USER', payload: {} });
        }
    } catch (error) {
        yield put({ type: 'LOGIN_ERROR', error });
    }
}

export function* watchUserRequested() {
    yield takeLatest('LOGIN', authSagaFun);
    yield takeLatest('FETCH_USER', getUser);
}
