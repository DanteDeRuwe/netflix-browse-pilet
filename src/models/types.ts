
export interface FetchResult {
    response?: ApiData;
    error: any;
}

export interface ApiData {
    results?: ApiDataEntry[]
}

export interface ApiDataEntry {
    name: string;
    original_title: string;
    id: string;
    vote_average: string;
    overview: string;
    backdrop_path: string;
}

export interface ShowCaseData {
    url: string;
    title: string;
    media_type: 'tv' | 'movie';
}