import React, { Component } from 'react';
import AppBarMUI from './appBar.js';
import HomeStyle from '../scss/home.scss';
import Gallery from './Gallery.js';


class Home extends Component {
  render() {
    return (
      <section className="home-section">
        <h1 className="hometitle-h1">Trip to Japan</h1>
      </section>
    )
  }
};

export default Home;
