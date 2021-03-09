import * as React from 'react';
import { HeroProps } from '../models/proptypes';
import HeroButton from './HeroButton';

const Hero: React.FC<HeroProps> = props => (
  <div id="hero" className="Hero" style={{ backgroundImage: `url(${props.backgroundUrl})` }}>
    <div className="content">
      <img className="logo" src="https://i.imgur.com/0YCMbxg.png" alt="narcos background" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div className="button-wrapper">
        <HeroButton primary={true} text="Watch now" />
        <HeroButton primary={false} text="Learn more" />
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default Hero;
