import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavStyle from '../scss/nav.scss';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Nav extends Component {

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', certival: 'top'}}
        >
        <MenuItem primaryText="Home"/>
        <MenuItem primaryText="Gallery"/>
        <MenuItem primaryText="About Me"/>
        </IconMenu>
      </div>
    )
  }
}

export default Nav;
