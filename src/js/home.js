import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Home:
 * A component that holds the content for the homepage
 */
const Home = (props) => (
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
            vestibulum tempor commodo. Aliquam accumsan mi justo. Integer dui ante, 
            consectetur id interdum sit amet, hendrerit id sem. Quisque dapibus est 
            ut blandit facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec at nisl imperdiet, ullamcorper dolor vel, consectetur magna.
            Mauris tempor quam sed lectus cursus eleifend. Suspendisse tristique 
            elit nisl, et sodales lorem fringilla nec.
        </p>
        <p>
            Aliquam dignissim ex risus, et tincidunt erat molestie vitae. Nam est 
            magna, dapibus ac tristique lacinia, molestie ut sapien. Morbi quis leo 
            ut quam mollis porta. Cras sollicitudin enim tellus. Donec lobortis, 
            eros vitae blandit condimentum, eros leo fringilla sapien, at pretium 
            lorem ligula a mi. Mauris porttitor egestas nibh scelerisque rhoncus. 
            Aenean bibendum nisi nec neque pellentesque ultrices. Vivamus vitae 
            maximus nisi, ac feugiat purus. Suspendisse laoreet dui in vehicula 
            eleifend. Phasellus finibus est in nulla pretium, ac interdum justo 
            lobortis. Aenean pulvinar ultrices risus id convallis.
        </p>
        <p>
            Nunc id malesuada nulla. Nam at finibus felis, vel congue tortor. Fusce 
            cursus sollicitudin interdum. Phasellus ultrices porta urna, nec feugiat
            neque iaculis quis. Aliquam auctor vitae arcu id dignissim. Sed 
            consectetur diam venenatis molestie scelerisque. Phasellus vitae arcu at
            turpis finibus posuere sed in elit. Curabitur sed erat erat. Suspendisse
            ut nisi euismod, imperdiet mi nec, tincidunt orci. Donec non orci sed 
            nisi congue volutpat. Proin aliquet volutpat augue ac sodales. Duis 
            accumsan purus nisl, et pellentesque nunc lobortis sit amet. Ut tempus 
            lacus a dictum porta.
        </p>
        <p>
            Aenean non vulputate ante, non pellentesque ipsum. Suspendisse id 
            maximus turpis. Nullam vel sagittis purus, vitae maximus orci. Sed est 
            enim, pellentesque non nisi ut, sollicitudin pulvinar ipsum. Sed eget 
            risus in mauris tempor bibendum et sit amet ligula. Aenean ut sapien 
            egestas tortor fringilla maximus sed sed sem. Nulla massa nibh, faucibus
            non condimentum lacinia, laoreet at tellus. Aenean in enim tellus. Orci 
            varius natoque penatibus et magnis dis parturient montes, nascetur 
            ridiculus mus. Donec non rutrum eros, in fermentum tortor.
        </p>
        <p>
            Donec in placerat nibh. Donec dapibus semper mauris, ut mattis nibh 
            hendrerit non. Ut tincidunt odio volutpat hendrerit semper. Cras quis 
            finibus enim. Integer dignissim pellentesque fermentum. Duis eleifend 
            rhoncus elit, ac euismod urna facilisis eu. Nulla porttitor, urna 
            fringilla vehicula cursus, augue tortor semper sapien, eget lacinia 
            sapien leo in quam.
        </p>
    </div>
);

Home.propTypes = {
    page: PropTypes.string.isRequired,
};

const ms2p = (state) => ({
    page: state.ui.page,
});

export default connect(ms2p, () => ({}))(Home);