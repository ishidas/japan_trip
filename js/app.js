import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
};

ReactDOM.render(<Home />, document.querySelector('.app'));
