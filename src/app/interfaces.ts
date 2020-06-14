export class Movie {
    page: number;
    total_results: number;
    total_pages: number;
    results: Array<any>;
}

export class Genre {
    id: number;
    name: string;
}

export class MovieDetails {
    backdrop_path: string;
    original_title: string
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
}

export class MovieCredits {
    cast: any;
    crew: any;
    id: number;
}