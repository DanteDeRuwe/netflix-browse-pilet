import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HeroButtonProps {
  primary: boolean;
  text: string;
  href?: string;
}

const HeroButton: React.FC<HeroButtonProps> = props => {
  if (props.href.startsWith('http'))
    return (
      <a href={props.href} target="_blank" className="Button" data-primary={props.primary}>
        {props.text}
      </a>
    );

  return (
    <Link to={props.href} className="Button" data-primary={props.primary}>
      {props.text}
    </Link>
  );
};

export default HeroButton;
