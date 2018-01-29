import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const Header = (props) => {
    return (
        <Menu className={props.className}>
            <Menu.Item
                icon='content'
                onClick={props.handleSidebarOpen}
            />
            <Menu.Item>
                Writing Site
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    User Stuff
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

const HeaderStyled = styled(Header)`
    margin-bottom: 0 !important;
`

export default HeaderStyled;