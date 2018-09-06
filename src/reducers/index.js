import * as actions from '../actions';

const initialState = {
    mainMenuActive: false,
    pageTitle: "inspiry"
}

export const inspiryReducer = (state = initialState, action) => {
    if (action.type === actions.TOGGLE_MAIN_MENU) {
        return Object.assign({}, state, {
            mainMenuActive: !state.mainMenuActive
        })
    }
    return state;
};