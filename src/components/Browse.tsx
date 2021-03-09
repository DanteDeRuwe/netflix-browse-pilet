import * as React from 'react';
import { BrowseProps } from '../models/proptypes';
import { ShowCaseData } from '../models/types';
import Hero from './Hero';
import Showcase from './Showcase';

const sectiondata: ShowCaseData[] = [
  { media_type: 'tv', title: 'Top TV picks for Jack', url: 'discover/tv?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Trending now', url: 'discover/movie?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Most watched Horror', url: 'genre/27/movies?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Sci-Fi greats', url: 'genre/878/movies?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Comedy magic', url: 'genre/35/movies?sort_by=popularity.desc&page=1' },
];

const Browse: React.FC<BrowseProps> = ({ MovieTile }) => {
  const sectionElements = sectiondata.map((el, i) => <Showcase MovieTile={MovieTile} {...el} key={i}></Showcase>);

  return (
    <div className="Browse">
      <Hero />
      {sectionElements}
    </div>
  );
};

export default Browse;
