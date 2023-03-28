import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPosts() {
    try {
        const response = yield axios.get('http://localhost:3004/posts?_order=createdAt');
        const data = response.data.body;
        yield put({
            type: 'GET_POSTS_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put({
            type: 'GET_POSTS_ERROR',
            payload: error,
        });
    }
}

function* changeEmoji(action) {
    try {
        yield put({
            type: 'CHANGE_EMOJI_SUCCESS',
            payload: action.payload,
        });
    } catch (error) {
        yield put({
            type: 'CHANGE_EMOJI_ERROR',
            payload: error,
        });
    }
}

function* detailPost(action) {
    try {
        const response = yield axios.get(`http://localhost:3004/posts/${action.payload}`);
        const data = response.data.body;
        yield put({
            type: 'GET_DETAIL_POST_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put({
            type: 'GET_DETAIL_POST_ERROR',
            payload: error,
        });
    }
}

export function* watchPostsRequest() {
    yield takeLatest('GET_POSTS', getPosts);
    yield takeLatest('HANDLE_CHANGE_EMOJI', changeEmoji);
    yield takeLatest('HANDLE_OPEN_DETAIL_POST', detailPost);
}
