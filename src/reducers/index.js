import * as actions from '../actions';

const initialState = {
    mainMenuActive: false,
    pageTitle: "inspiry",
    docTitle: "inspiry: unblock your brain"
}

export const inspiryReducer = (state = initialState, action) => {

    if (action.type === actions.TOGGLE_MAIN_MENU) {
        return Object.assign({}, state, {
            mainMenuActive: !state.mainMenuActive
        })
    } else if (action.type === actions.CREATE_PAGE_TITLE) {
        // Specific titles for the homepage
        const appTitle = "inspiry";
        if (action.pageTitle === "home") {
            return Object.assign({}, state, {
                pageTitle: appTitle,
                docTitle: appTitle + ": unblock your brain"
            })
        }
        return Object.assign({}, state, {
            pageTitle: action.pageTitle,
            docTitle: appTitle + ": " + action.pageTitle
        })
    }

    return state;
};