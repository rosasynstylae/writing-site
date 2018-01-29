import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

const SidebarMenu = (props) => {
    return (
        <Sidebar as={Menu} animation='overlay' width='thin' visible={props.isVisible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
                <Icon name='home' />
                Home
            </Menu.Item>
        </Sidebar>
    );
}

const SidebarMenuStyled = styled(SidebarMenu)`
`

export default SidebarMenuStyled;