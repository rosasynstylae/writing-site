import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sidebar } from 'semantic-ui-react';

import SidebarMenu from './sidebar';
import PageTitle from './page-title';
import Header from './header';

const InnerPage = (props) => {
    return (
        <div className={props.className} onClick={props.handleContentClick}>
            <PageTitle />
        </div>
    );
}

InnerPage.propTypes = {
    className: PropTypes.string,
};

const InnerPageStyled = styled(InnerPage)`
    height: 100%;
    width: 100%;
    padding: 20px;
`

const PagePusher = (props) => {
    return (
        <Sidebar.Pusher
            className={props.className}
            onClick={props.onSidebarClose}
        >
            <InnerPageStyled handleContentClick={props.onContentClick} />
        </Sidebar.Pusher>
    )
}

PagePusher.propTypes = {
    className: PropTypes.string,
    onSidebarClose: PropTypes.func,
    onContentClick: PropTypes.func,
};

PagePusher.defaultProps = {
    className: '',
    onSidebarClose: () => {},
    onContentClick: () => {},
}

const PagePusherStyled = styled(PagePusher)`
    height: 100%;
`

const Page = (props) => {
    const { className, isSidebarVisible, ...contentProps } = props;
    
    return (
        <Sidebar.Pushable className={className}>
            <SidebarMenu isVisible={isSidebarVisible} />
            <PagePusherStyled {...contentProps} />
        </Sidebar.Pushable>
    );
}

Page.propTypes = {
    className: PropTypes.string,
};

const PageStyled = styled(Page)`
    margin-top: 0 !important;
    height: calc(100vh - 42px);
`

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
                <PageStyled
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
    min-height: 100vh;
    width: 100vw
`;

export default BaseLayoutStyled;