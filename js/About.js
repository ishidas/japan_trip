import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import aboutStyle from '../scss/about.scss';

class About extends Component {

  render() {
    return (
      <section className={aboutStyle.aboutSection}>
      <Card>
      <CardMedia
      overlay={<CardTitle title="Shinsaibashi Osaka, Japan" subtitle="photo by Louis Lo from unsplush" />}
    >
      <img src="../scss/assets/louis-lo-275899.jpg" alt="osaka streat image credit to Louis Lo unsplush" />
    </CardMedia>
    <CardTitle title="Exploring in Osaka" subtitle="shinsaibashi" />
      <CardText>
      Hi! Thank you for visiting my website! I wanted to work on a project using React.js and Material-UI, the hot web building combo. I''m originally from Osaka, Japan, and I want to show you how to enjoy being in Osaka. I have some photos and some recommendations I can give that people may find them interesting. Anyways, Osaka is a unique and intriguing place to visit in my opinion (yes, I am biased :P) It''s got its own food, culture and people. When you visit Osaka, you definitely want to visit Shinsaibashi and Namba. There is long arched way filled with restaurants and food connecting those two towns. You won''t run out of the things to do.
      </CardText>
      </Card>
      </section>
    )
  }
}

export default About;
