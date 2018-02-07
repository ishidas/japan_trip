import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Gallery from './Gallery.js';
import Home from './Home.js';
import About from './About.js';





class Nav extends Component {

  render() {
    return (
      <div>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            iconStyle={{ fill: 'fff' }}
          >
            <Link to="/"><MenuItem primaryText="Home"/></Link>
            <Link to="/gallery"><MenuItem primaryText="Gallery"/></Link>
            <Link to="/about"><MenuItem primaryText="About"/></Link>
          </IconMenu>
      </div>
    )
  }
}

export default Nav;
