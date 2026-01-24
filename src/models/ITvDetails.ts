import {IGenres} from "@/models/IGenres";

export interface ITVDetails {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    genres: IGenres[];
}
