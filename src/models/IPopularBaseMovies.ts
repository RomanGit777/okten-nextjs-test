import {IPopularMovies} from "@/models/IPopularMovies";

export interface IPopularBaseMovies {
    page: number,
    results: IPopularMovies[],
    total_pages: number,
    total_results: number
}