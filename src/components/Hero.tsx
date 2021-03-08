import * as React from 'react';
import HeroButton from './HeroButton';

const Hero: React.FC = () => (
  <div
    id="hero"
    className="Hero"
    style={{
      backgroundImage: 'url(https://imgur.com/YbHXV0Z.png)',
    }}
  >
    <div className="content">
      <img className="logo" src="https://i.imgur.com/0YCMbxg.png" alt="narcos background" />
      <h2>Season 2 now available</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero
        debitis, magnam quis quod.
      </p>
      <div className="button-wrapper">
        <HeroButton primary={true} text="Watch now" />
        <HeroButton primary={false} text="+ My list" />
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default Hero;
