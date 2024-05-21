// cartAction.js
const initialState =[];
export const cartAction = (state = initialState, action) => {
    switch (action?.type) {
        case "ADD_CART":
            return ADD(state, action.data);
        case "REMOVE_CART":
            return REMOVE(state, action.data);
        default:
            return state;
    }
};

function ADD(state, data) {
    const newState = [...state, data];
    return newState;
}

function REMOVE(state, data) {
    const newState = state.filter(item => item !== data);
    return newState;
}
