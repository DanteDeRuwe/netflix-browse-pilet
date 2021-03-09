import * as React from 'react';
import { BrowseProps } from '../models/proptypes';
import { HeroData, ShowCaseData } from '../models/types';
import Hero from './Hero';
import Showcase from './Showcase';

const sectiondata: ShowCaseData[] = [
  { media_type: 'tv', title: 'Top TV picks for you', url: 'discover/tv?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Trending now', url: 'discover/movie?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Most watched Horror', url: 'genre/27/movies?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Sci-Fi greats', url: 'genre/878/movies?sort_by=popularity.desc&page=1' },
  { media_type: 'movie', title: 'Comedy magic', url: 'genre/35/movies?sort_by=popularity.desc&page=1' },
];

const heroProps: HeroData = {
  backgroundUrl: 'https://imgur.com/YbHXV0Z.png',
  logoUrl: 'https://i.imgur.com/0YCMbxg.png',
  title: 'Season 2 now available',
  text: `In the second season, notorious drug kingpin Pablo Escobar is on the run, 
  with the Colombian authorities in relentless pursuit -- 
  and determined to put an end to his illegal activities.`,
};

const Browse: React.FC<BrowseProps> = ({ MovieTile }) => {
  const sectionElements = sectiondata.map((el, i) => <Showcase MovieTile={MovieTile} {...el} key={i}></Showcase>);

  return (
    <div className="Browse">
      <Hero {...heroProps}></Hero>
      {sectionElements}
    </div>
  );
};

export default Browse;
