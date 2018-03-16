/** ui-actions: A file that holds the action types and actions for the ui state
 */
import actionCreator from './helpers';


/** Action Typess */
const SET_SIDEBAR_VISIBLITY = 'SET_SIDEBAR_VISIBLITY';
const SET_REGISTERING = 'SET_REGISTERING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const EDIT_ENTITY = 'EDIT_ENTITY';
const LIST_ENTITIES = 'LIST_ENTITIES';

export const actionTypes = { 
    SET_SIDEBAR_VISIBLITY,
    SET_REGISTERING,
    SET_CURRENT_PAGE,
    EDIT_ENTITY,
    LIST_ENTITIES,
};

/** Actions */
/**
 * setSidebarVisiblity
 * a function that updates the sidebar visiblity in state
 */
export const setSidebarVisiblity = actionCreator(SET_SIDEBAR_VISIBLITY);

/**
 * setRegistering
 * a function that updates the registration form visibility in state
 */
export const setRegistering = actionCreator(SET_REGISTERING);

/**
 * setCurrentPage
 * a function that updates the current page in state
 */
export const setCurrentPage = actionCreator(SET_CURRENT_PAGE);

/**
 * editEntity
 * a function that updates the page to the "adding/editting an entity" state
 */
export const editEntity = actionCreator(EDIT_ENTITY);

/**
 * listEntities
 * a function that updates the page to the "adding/editting an entity" state
 */
export const listEntities = actionCreator(LIST_ENTITIES);