import React, { Component } from 'react';
// import iconImage from '../scss/assets/japan_trip_icon.svg';

const divStyle = {
  padding: '0 15px',
  width: '90%'
}
class IconTitleAppBar extends Component {

  render() {
    return (
      <div style={divStyle}>
        <img src={'build/' + require('../scss/assets/japan_trip_icon.svg')} />
      </div>
    )
  }
}

export default IconTitleAppBar;
