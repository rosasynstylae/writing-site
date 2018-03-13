import { actionTypes } from './ui-actions';
import { PAGES, PAGE_TITLES } from './constants';

const defaultState = {
    page: PAGES.HOME,
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