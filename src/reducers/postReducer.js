import axios from 'axios';

const initialState = {
    posts: [],
    postDetails: {},
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.payload,
            };
        case 'CHANGE_EMOJI_SUCCESS':
            const postsCopy = [...state.posts];
            const postUpdate = postsCopy.find((post) => post.id === action.payload.post);
            if (postUpdate && postUpdate.emoji.length > 0) {
                const index = postUpdate.emoji.findIndex(
                    (emoji) => emoji.id === action.payload.emoji,
                );

                postUpdate.emoji[index].quantity += 1;

                axios.put(`http://localhost:3004/posts/${action.payload.post}`, postUpdate);

                return {
                    ...state,
                    postDetails: postUpdate,
                };
            }

        case 'GET_DETAIL_POST_SUCCESS':
            return {
                ...state,
                postDetails: action.payload,
            };

        default:
            return state;
    }
};

export default postReducer;
