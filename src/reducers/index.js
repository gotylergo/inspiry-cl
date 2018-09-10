import * as actions from '../actions';

const initialState = {
    mainMenuActive: false,
    appTitle: "inspiry 1",
    pageTitle: "inspire your brain 1",
    docTitle: "inspiry 1: unblock your brain"
}

export const inspiryReducer = (state = initialState, action) => {

    if (action.type === actions.TOGGLE_MAIN_MENU) {
        return Object.assign({}, state, {
            mainMenuActive: !state.mainMenuActive
        })
    } else if (action.type === actions.CREATE_PAGE_TITLE) {
        // return Object.assign({}, state, {
        //     pageTitle: action.pageTitle,
        //     docTitle: state.appTitle + ": reducer! " + action.pageTitle
        // })
        return Object.assign({}, state, {
            pageTitle: "reducePageTitle",
            docTitle: state.appTitle + ": reducer! " + state.pageTitle
        })

        // }
        // return Object.assign({}, state, {
        //     pageTitle: state.appTitle + ": undefined" + action.pagetitle,
        //     docTitle: "inspiry2: undefined inspire your brain2"
        // })
    }
    return state;
};