import { ShowCaseData } from './types';

export interface BrowseProps {
    MovieTile: React.FC<MovieTileProps>;
}

export interface ShowCaseProps extends ShowCaseData {
    MovieTile: React.FC<MovieTileProps>;
}

export interface MovieTileProps {
    backdrop: string;
    title: string;
    score: string;
    overview: string;
    movieId: string;
    media_type: 'tv' | 'movie';
}
