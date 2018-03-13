/** ui-actions: A file that holds the action types and actions for the ui state
 */
import actionCreator from './helpers';


/** Action Typess */
const SET_SIDEBAR_VISIBLITY = 'SET_SIDEBAR_VISIBLITY';

export const actionTypes = { SET_SIDEBAR_VISIBLITY };

/** Actions */
/**
 * setSidebarVisiblity
 * a function that updates the sidebar visiblity in state
 */
export const setSidebarVisiblity = actionCreator(SET_SIDEBAR_VISIBLITY);