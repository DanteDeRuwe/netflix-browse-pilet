export interface ShowCaseData {
    url: string;
    title: string;
    media_type: 'tv' | 'movie';
}

export interface ApiData {
    results?: [{
        name: string;
        original_title: string;
        id: string;
        vote_average: string;
        overview: string;
        backdrop_path: string;
    }]
}
