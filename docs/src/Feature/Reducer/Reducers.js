import { ADD_TO_CARD, ADD_TO_FAVITEM, DEL_TO_CARTITEM, DEL_TO_FAVITEM } from "../Action/Action";
export const initialState = {
    cartItem: [],
    favItem: [],
    isAuthenticaticon: JSON.parse(localStorage.getItem('userlogin')) || false
};

export const statereducer = (state = initialState, action) => {
    console.log("state1 reducer", state);
    switch (action.type) {
        case ADD_TO_CARD: {
            return {
                ...state,
                cartItem: [...state.cartItem, action.payload],
            };
        }
        case ADD_TO_FAVITEM: {
            return {
                ...state,
                favItem: [...state.favItem, action.payload],
            };
        }
        case DEL_TO_CARTITEM: {
            return {
                ...state,
                cartItem: action.payload,
            };
        }
        case DEL_TO_FAVITEM: {
            return {
                ...state,
                favItem: action.payload,
            };
        }
        case "login": {
            return {
                ...state,
                isAuthenticaticon: action.payload,
            };
        }

        default:
            return state;
    }
};