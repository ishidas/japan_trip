import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey700 } from 'material-ui/styles/colors';
import Style from '../scss/global.scss';
import AppBarMUI from './appBar.js';
import Home from './Home.js';
import HomeCards from './HomeCards.js';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey700,
  },
  appBar: {
    height: 50,
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppBarMUI />
        </MuiThemeProvider>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('.app'));
