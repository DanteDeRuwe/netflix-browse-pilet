import * as React from 'react';
import { Link } from 'react-router-dom';


export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface SamplePageProps {
  data: Array<Post>;
}

export const SamplePage: React.FC<SamplePageProps> = ({data}) => (
  <div>
    <Link to="">&lt; back</Link>
    <h1>Hello!</h1>
    <p>This is a sample page by Dante De Ruwe</p>

    <h1>Posts</h1>
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <b>{item.title}</b>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  </div>
);

