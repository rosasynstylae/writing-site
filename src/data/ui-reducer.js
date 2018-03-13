import { actionTypes } from './ui-actions';
import { PAGES } from './constants';

const defaultState = {
    // which page we are currently on
    page: PAGES.HOME.name,
    // whether or not the sidebar is visible
    isSidebarVisible: false,
}

const uiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_SIDEBAR_VISIBLITY:
            return Object.assign({}, state, {
                isSidebarVisible: action.payload,
            });
        default:
            return state;
    }
};

export default uiReducer;