/**
 * Created by agomez on 13/09/16.
 */

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

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
                    style={{ margin: 0 }}/>
                <Drawer open={this.state.open}>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/" />}>Home</MenuItem>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/courses"/>}>About</MenuItem>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/about"/>}>About</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;