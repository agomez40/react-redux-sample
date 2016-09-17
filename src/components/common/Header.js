/**
 * Created by agomez on 13/09/16.
 */

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import {spacing, typography, zIndex} from 'material-ui/styles';
import {cyan500} from 'material-ui/styles/colors';

const styles = {
    logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: cyan500,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8,
    },
    version: {
        paddingLeft: spacing.desktopGutterLess,
        fontSize: 16,
    }
};

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="Pluralsight Administration"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    style={{margin: 0}}/>
                <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                    <div style={styles.logo} onTouchTap={this.handleClose}>
                        Pluralsight
                    </div>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/"/>}>Home</MenuItem>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/courses"/>}>Courses</MenuItem>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/about"/>}>About</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;