import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    background: '#ECEFF1',
    height: 812,
  },
  gridList: {
    width: 800,
    height: 800,
    overflowY: 'auto',
  },
  sub: {
    paddingTop: '10%',
  }
};


const tilesData = [
  {
    img: '../scss/assets/alex-knight-196948.jpg',
    title: 'octpus',
    author: 'alex knight'
  },
  {
    img: '../scss/assets/alex-knight-199364.jpg',
    title: 'Octopus',
    author: 'alex knight'
  },
  {
    img: '../scss/assets/drica-pinotti-439462.jpg',
    title: 'Takoyaki',
    author: 'drica pinotti'
  },
  {
    img: '../scss/assets/j-434646.jpg',
    title: 'Ramen',
    author: 'j'
  },
  {
    img: '../scss/assets/jonathan-forage-225346.jpg',
    title: 'sushi',
    author: 'jonathan forage'
  },
  {
    img: '../scss/assets/matthew-hamilton-160833.jpg',
    title: 'ramen',
    author: 'matthew hamilton'
  },
]
class Gallery extends Component {

    render() {
      return (
          <div style={styles.root}>
            <GridList
              cols={2}
              cellHeight={300}
              style={styles.gridList}
              >
              <Subheader style={styles.sub}>Osaka</Subheader>
              {tilesData.map((tile) => {
                return <GridTile
                  key={tile.img}
                  title={tile.title}
                  subtitle={<span>by <b>{tile.author}</b></span>}
                ><img src={tile.img} />
                </GridTile>
              })}
          </GridList>
        </div>
      )
  }
}

export default Gallery;
