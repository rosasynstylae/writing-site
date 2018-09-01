import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import { PAGES } from '../data/constants';
import { setCurrentPage } from '../data/ui-actions';

/* SidebarMenu:
 * The sidebar component. Holds the list of pages a user can visit.
 *
 * Props:
 * isVisibile (str, optional, default=False):
 *     whether or not the sidebar is currently visible
 */
const SidebarMenu = props => {
  const menuItems = []; // a list of menu items to have in the sidebar

  // Add each "page" to the sidebar
  for (const key in PAGES) {
    const page = PAGES[key];
    menuItems.push(
      <Menu.Item key={key} onClick={props.onItemClick.bind(this, page.name)}>
        <Icon name={page.icon} />
        {page.title}
      </Menu.Item>,
    );
  }

  return (
    <Sidebar
      as={Menu}
      animation="push"
      width="thin"
      visible={props.isVisible}
      icon="labeled"
      vertical
      inverted
    >
      {menuItems}
    </Sidebar>
  );
};

SidebarMenu.propTypes = {
  isVisible: PropTypes.bool,
};

SidebarMenu.defaultProps = {
  isVisible: true,
};

const ms2p = state => ({
  page: state.ui.page,
});

const md2p = (dispatch, ownProps) => ({
  onItemClick: page => {
    dispatch(setCurrentPage(page));
  },
});

export default connect(
  ms2p,
  md2p,
)(SidebarMenu);
