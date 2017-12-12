import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Nav from './nav.js';
import Home from './Home.js';
import HomeCards from './HomeCards.js';

class AppBarMUI extends Component {

  render () {
    return (
      <section>
        <AppBar
          title="Japan Trip"
          iconElementLeft={<Nav />}
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
