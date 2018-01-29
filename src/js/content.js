import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sidebar, Segment } from 'semantic-ui-react';
import SidebarMenu from './sidebar';

const InnerContent = (props) => {
    return (
        <div className={props.className} onClick={props.handleContentClick}>
            Hello
        </div>
    );
}

InnerContent.propTypes = {
    className: PropTypes.string,
};

const InnerContentStyled = styled(InnerContent)`
    height: 100%;
    width: 100%;
    background: #aac;
`

const ContentPusher = (props) => {
    return (
        <Sidebar.Pusher
            className={props.className}
            onClick={props.onSidebarClose}
        >
            <InnerContentStyled handleContentClick={props.onContentClick} />
        </Sidebar.Pusher>
    )
}

ContentPusher.propTypes = {
    className: PropTypes.string,
};

const ContentPusherStyled = styled(ContentPusher)`
    height: 100%;
`

const Content = (props) => {
    const { className, isSidebarVisible, ...contentProps } = props;
    
    return (
        <Sidebar.Pushable as={Segment} className={className}>
            <SidebarMenu isSidebarVisible={isSidebarVisible} />
            <ContentPusherStyled {...contentProps} />
        </Sidebar.Pushable>
    );
}

Content.propTypes = {
    className: PropTypes.string,
};

const ContentStyled = styled(Content)`
    margin-top: 0 !important;
    height: calc(100% - 42px);
`

export default ContentStyled;