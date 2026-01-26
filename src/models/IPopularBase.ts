import {IPopularTv} from "@/models/IPopularTv";
import {IPopularMovies} from "@/models/IPopularMovies";

export interface IPopularBase {
    page: number,
    results: IPopularTv[] | IPopularMovies[],
    total_pages: number,
    total_results: number
}