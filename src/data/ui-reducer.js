import merge from 'lodash/merge'

import { actionTypes } from './ui-actions';
import { PAGES } from './constants';

const emptyPageContent = {
    isEdit: false,
    currentEntity: null,
};

const defaultState = {
    // which page we are currently on
    page: PAGES.HOME.name,
    // whether or not the sidebar is visible
    isSidebarVisible: true,
    // handle auth-page ui decisions
    auth: {
        isRegistering: false,
    },
    // handle page ui decisions
    pageContent: emptyPageContent,
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
                pageContent: emptyPageContent,
            });
        case actionTypes.EDIT_ENTITY:
            return merge({}, state, {
                pageContent: {
                    isEdit: true,
                    currentEntity: action.payload,
                }
            });
        case actionTypes.LIST_ENTITIES:
            return merge({}, state, {
                pageContent: emptyPageContent,
            });
        default:
            return state;
    }
};

export default uiReducer;