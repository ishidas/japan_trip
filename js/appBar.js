import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Nav from './nav.js';

class AppBarMUI extends Component {

handleClick() {
  alert('hello!');
}
  render () {
    return (
      <AppBar
        title="Japan Trip"
        iconElementLeft={<Nav />}
      />
    )
  }
};


export default AppBarMUI;
