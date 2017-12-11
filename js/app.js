import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Style from '../scss/global.scss';
import AppBarMUI from './appBar.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBarMUI />
      </MuiThemeProvider>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('.app'));
