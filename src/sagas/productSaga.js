import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getProducts() {
    try {
        const response = yield axios.get('http://localhost:3004/products');
        const data = response.data.body;
        yield put({
            type: 'GET_PRODUCTS_SUCCESS',
            payload: data,
        });
    } catch (error) {
        yield put({
            type: 'GET_PRODUCTS_ERROR',
            payload: error,
        });
    }
}

function* addProductToCart(action) {
    const product = action.payload;
    yield put({
        type: 'ADD_PRODUCTS_SUCCESS',
        payload: {
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: 1,
        },
    });
}

export function* watchProductRequest() {
    yield takeLatest('GET_PRODUCTS', getProducts);
    yield takeLatest('ADD_TO_CART', addProductToCart);
}
