import * as React from 'react';
import { PiletApi } from 'netflix-piral';
import { Link } from 'react-router-dom';
import Browse from './components/Browse';
import { MovieTileProps } from './models/proptypes';
import './style.scss';

export function setup(app: PiletApi) {
  app.registerMenu(() => <Link to="/browse">Browse</Link>);

  const MovieTile: React.FC<MovieTileProps> = props => <app.Extension name="MovieTile" params={props}></app.Extension>;
  const FavoritesButton: React.FC<any> = props => <app.Extension name="ListToggle" params={props}></app.Extension>;
  const BrowsePage: React.FC = () => <Browse MovieTile={MovieTile} FavoritesButton={FavoritesButton}></Browse>;
  app.registerPage('/browse', BrowsePage);
}
