// import axios from 'axios';
const initialState = {
    products: [],
    cartArr: [],
};

const productReducer = (state = initialState, action) => {
    if (action.type === 'GET_PRODUCTS_SUCCESS') {
        return {
            ...state,
            products: action.payload,
        };
    }
    if (action.type === 'ADD_PRODUCTS_SUCCESS') {
        let productArr = [...state.products];
        const productUpdate = productArr.find((product) => product.id === action.payload.id);

        if (productUpdate.inventory > 0) {
            productUpdate.inventory -= 1;
            // axios.put(`http://localhost:3004/products/${productUpdate.id}`, productUpdate);
            if (!state.cartArr.find((product) => product.id === action.payload.id)) {
                return {
                    ...state,
                    cartArr: [...state.cartArr, action.payload],
                };
            } else {
                let newArr = state.cartArr;

                const product = newArr.find((product) => product.id === action.payload.id);

                product.quantity += 1;

                return {
                    ...state,
                    cartArr: [...newArr],
                    products: [...productArr],
                };
            }
        }
    }
    return state;
};

export default productReducer;
