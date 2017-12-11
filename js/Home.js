import React, { Component } from 'react';
import Nav from './nav.js';

class Home extends Component {
  render() {
    return (
      <section>
        <Nav />
        <h1>Hello World</h1>
      </section>
    )
  }
};

export default Home;
