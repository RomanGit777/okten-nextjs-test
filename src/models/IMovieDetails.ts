import {IGenres} from "@/models/IGenres";

export interface IMovieDetails {
    original_language: string;
    imdb_id: string;
    video: boolean;
    title: string;
    backdrop_path: string;
    revenue: number;
    genres: IGenres[];
    popularity: number;
    production_countries: Array<production_countriesItem>;
    id: number;
    vote_count: number;
    budget: number;
    overview: string;
    original_title: string;
    runtime: number;
    poster_path: string;
    spoken_languages: Array<spoken_languagesItem>;
    production_companies: Array<production_companiesItem>;
    release_date: string;
    vote_average: number;
    belongs_to_collection: string;
    tagline: string;
    adult: boolean;
    homepage: string;
    status: string;
}
export interface spoken_languagesItem {
	name: string;
	iso_639_1: string;
	english_name: string;
}

export interface production_companiesItem {
	logo_path: string;
	name: string;
	id: number;
	origin_country: string;
}

export interface production_countriesItem {
	iso_3166_1: string;
	name: string;
}


