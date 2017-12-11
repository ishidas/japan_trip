import React, { Component } from 'react';
import AppBarMUI from './appBar.js';

class Home extends Component {
  render() {
    return (
      <section>
        <AppBarMUI />
        <h1>Hello World</h1>
      </section>
    )
  }
};

export default Home;
