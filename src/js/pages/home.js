import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Grid } from 'semantic-ui-react';

/* Home:
 * A component that holds the content for the homepage
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const Home = (props) => (
    <Grid className={props.className}>
        <Grid.Column width={8}>
            Welcome to your home for fictional universes!  To get started,
            click on the "Universes" link on the sidebar and add a universe.  
            From there you can begin to populate your universe with stuff;  have
            fun and good writing!
        </Grid.Column>
    </Grid>
);

Home.propTypes = {
    className: PropTypes.string,
};

const HomeStyled = styled(Home)`
    font-size: 18px;
    line-height: 1.4;
`;

export default HomeStyled;
