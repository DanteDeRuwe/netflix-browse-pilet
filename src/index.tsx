import * as React from 'react';
import { PiletApi } from 'piral-tryout';
import { Post, SamplePage } from './SamplePage';
import { Link } from 'react-router-dom';

export function setup(app: PiletApi) {
  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => (
    <a href='https://docs.piral.io' target='_blank'>
      Documentation
    </a>
  ));
  app.registerTile(
    () => (
      <div className='tile rows-2 cols-2'>
        <div className='teaser'>
          <Link to='sample-page'>Lorem</Link>
          <br />
          ipsum dolor sit amet consectetur.
        </div>
      </div>
    ),
    {
      initialColumns: 2,
      initialRows: 2,
    }
  );

  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  const connect = app.createConnector<Array<Post>>(() => fetch(apiUrl).then(res => res.json()));
  app.registerPage("/sample-page", connect(SamplePage))
}
