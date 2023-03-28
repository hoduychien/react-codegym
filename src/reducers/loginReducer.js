const initialState = {
    users: [],
    userLogin: {},
};

const loginReducer = (state = initialState, action) => {
    if (action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            userLogin: action.payload,
        };
    }
    if (action.type === 'FETCH_USER_SUCCESS') {
        return {
            ...state,
            users: action.data,
        };
    }

    return state;
};

export default loginReducer;
