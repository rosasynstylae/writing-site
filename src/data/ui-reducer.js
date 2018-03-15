import merge from 'lodash/merge'

import { actionTypes } from './ui-actions';
import { PAGES } from './constants';

const defaultState = {
    // which page we are currently on
    page: PAGES.HOME.name,
    // whether or not the sidebar is visible
    isSidebarVisible: true,
    // handle auth-page ui decisions
    auth: {
        isRegistering: false,
    }
}

const uiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_SIDEBAR_VISIBLITY:
            return merge({}, state, {
                isSidebarVisible: action.payload,
            });
        case actionTypes.SET_REGISTERING:
            return merge({}, state, {
                auth: { isRegistering: action.payload },
            });
        case actionTypes.SET_CURRENT_PAGE:
            return merge({}, state, {
                page: action.payload,
            });
        default:
            return state;
    }
};

export default uiReducer;