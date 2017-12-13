import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Nav from './nav.js';
import Home from './Home.js';
import HomeCards from './HomeCards.js';
import IconTitleAppBar from './iconTitleAppBar.js';

class AppBarMUI extends Component {

  render () {
    return (
      <section>
        <AppBar
          iconElementRight={<IconTitleAppBar />}
          iconElementLeft={<Nav />}
          style={{ position: "fixed" }}
        />
        <section>
          <Home />
          <HomeCards />
        </section>
      </section>
    )
  }
};


export default AppBarMUI;
