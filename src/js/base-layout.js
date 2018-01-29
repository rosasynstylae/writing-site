import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import Content from './content';

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isSidebarVisible: false,
        }
        
        this.onSidebarOpen = this.onSidebarOpen.bind(this);
        this.onSidebarClose = this.onSidebarClose.bind(this);
    }
    
    onSidebarOpen() {
        this.setState({ isSidebarVisible: true });
    }
    
    onSidebarClose() {
        this.setState({ isSidebarVisible: false });
    }
    
    render() {
        return (
            <div className={this.props.className}>
                <Header handleSidebarOpen={this.onSidebarOpen} />
                <Content
                    isSidebarVisible={this.state.isSidebarVisible}
                    onContentClick={this.onSidebarClose}
                />
            </div>
        );
    }
}

BaseLayout.propTypes = {
    className: PropTypes.string,
};

const BaseLayoutStyled = styled(BaseLayout)`
    height: 100vh;
    width: 100vw
`;

export default BaseLayoutStyled;