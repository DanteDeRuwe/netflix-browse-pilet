import * as React from 'react';
import { MovieTileProps } from '../models/MovieTileProps';
import Hero from './Hero';
import TitleList from './TitleList';

interface BrowseProps {
  MovieTile: React.FC<MovieTileProps>;
}

const Browse: React.FC<BrowseProps> = ({ MovieTile }) => (
  <div>
    <Hero />
    <TitleList
      media_type="tv"
      MovieTile={MovieTile}
      title="Top TV picks for Jack"
      url="discover/tv?sort_by=popularity.desc&page=1"
    />
    <TitleList
      media_type="movie"
      MovieTile={MovieTile}
      title="Trending now"
      url="discover/movie?sort_by=popularity.desc&page=1"
    />
    <TitleList
      media_type="movie"
      MovieTile={MovieTile}
      title="Most watched Horror"
      url="genre/27/movies?sort_by=popularity.desc&page=1"
    />
    <TitleList
      media_type="movie"
      MovieTile={MovieTile}
      title="Sci-Fi greats"
      url="genre/878/movies?sort_by=popularity.desc&page=1"
    />
    <TitleList
      media_type="movie"
      MovieTile={MovieTile}
      title="Comedy magic"
      url="genre/35/movies?sort_by=popularity.desc&page=1"
    />
  </div>
);

export default Browse;
