import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, HashRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Nav from './nav.js';
import Home from './Home.js';
import Gallery from './Gallery.js';
import IconTitleAppBar from './iconTitleAppBar.js';
import About from './About.js';
import NotFound from './NotFound.js';


class AppBarMUI extends Component {

  render () {
    return (
      <HashRouter>
      <section>
        <AppBar
          iconElementRight={<IconTitleAppBar />}
          iconElementLeft={<Nav />}
          style={{ position: "fixed" }}
        />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route component={ NotFound } />
        </Switch>
      </section>

      </HashRouter>

    )
  }
};


export default AppBarMUI;
