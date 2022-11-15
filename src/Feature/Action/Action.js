export const ADD_TO_CARD = "ADD_TO_CARD";
export const ADD_TO_FAVITEM = "ADD_TO_FAVITEM";
export const DEL_TO_CARTITEM = "DEL_TO_CARTITEM";
export const DEL_TO_FAVITEM = "DEL_TO_FAVITEM";
export const addtocard = (payload) => {
    return {
        type: ADD_TO_CARD,
        payload: payload,
    };
};
export const addtofavitem = (payload) => {
    return {
        type: ADD_TO_FAVITEM,
        payload: payload,
    };
};
export const deletecartitem = (payload) => {
    return {
        type: DEL_TO_CARTITEM,
        payload: payload,
    };
};
export const deletefavitem = (payload) => {
    return {
        type: DEL_TO_FAVITEM,
        payload: payload,
    };
};
