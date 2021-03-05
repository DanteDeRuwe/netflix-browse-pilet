import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import { Link } from 'react-router-dom';
import Browse from './components/Browse';

export function setup(app: PiletApi) {
  app.registerMenu(() => <Link to="/browse">Browse</Link>);
  app.registerPage('/browse', Browse);
}
