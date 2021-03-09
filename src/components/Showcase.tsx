import * as React from 'react';
import useFetch from '../hooks/useFetch';
import { MovieTileProps, ShowCaseProps } from '../models/proptypes';
import { ApiDataEntry } from '../models/types';

const apiKey = '87dfa1c669eea853da609d4968d294be';

const Showcase: React.FC<ShowCaseProps> = props => {
  const [mounted, setMounted] = React.useState(false);
  const [titles, setTitles] = React.useState<JSX.Element[]>([]);

  let requestUrl = `https://api.themoviedb.org/3/${props.url}&api_key=${apiKey}`;
  const fetchresult = useFetch(requestUrl);

  React.useEffect(() => {
    const slice = fetchresult?.response?.results?.slice(0, 5) ?? [];
    let items = slice.map(title => {
      const movieTileProps: MovieTileProps = createMovieTileProps(title, props);
      return <props.MovieTile key={title.id} {...movieTileProps}></props.MovieTile>;
    });
    setTitles(items);
    setMounted(true);
  }, [fetchresult?.response?.results]);

  return (
    <div className="TitleList" data-loaded={mounted}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {titles.length > 0 ? titles : <p style={{ color: 'gray' }}> Nothing was found</p>}
        </div>
      </div>
    </div>
  );
};

export default Showcase;

/*
Helpers
*/

const createMovieTileProps = (title: ApiDataEntry, props: ShowCaseProps) => ({
  media_type: props.media_type,
  movieId: title.id,
  title: title.name || title.original_title,
  score: title.vote_average,
  overview: title.overview,
  backdrop: `http://image.tmdb.org/t/p/original/${title.backdrop_path}`,
});
