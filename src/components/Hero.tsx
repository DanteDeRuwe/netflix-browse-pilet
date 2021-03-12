import * as React from 'react';
import { HeroProps } from '../models/proptypes';
import HeroButton from './HeroButton';

const Hero: React.FC<HeroProps> = props => {
  return (
    <div id="hero" className="Hero" style={{ backgroundImage: `url(${props.backgroundUrl})` }}>
      <div className="content">
        <img className="logo" src={props.logoUrl} />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="button-wrapper">
          <HeroButton primary={true} text="Watch Now" href={`/watch/${props.media_type}/${props.movieId}`} />
          <props.FavoritesButton full={true} {...props}></props.FavoritesButton>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
