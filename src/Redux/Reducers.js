// reducers/index.js

import { combineReducers } from 'redux';

const initialState = {
    loggedIn: false,
};

const userReducer = (state = initialState, action) => {
    console.log("helllllll", state)

    switch (action.type) {
        case 'LOGIN':
            console.log("helllllll12345")

            return { ...state, loggedIn: true };
        case 'LOGOUT':
            console.log("helllllll", state)

            return { ...state, loggedIn: false };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
