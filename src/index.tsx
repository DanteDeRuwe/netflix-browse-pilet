import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import { Link } from 'react-router-dom';
import Browse from './components/Browse';
import { MovieTileProps } from './models/proptypes';
import './style.scss';

export function setup(app: PiletApi) {
  app.registerMenu(() => <Link to="/browse">Browse</Link>);

  const MovieTile: React.FC<MovieTileProps> = props => <app.Extension name="MovieTile" params={props}></app.Extension>;
  app.registerPage('/browse', () => <Browse MovieTile={MovieTile}></Browse>);
}
