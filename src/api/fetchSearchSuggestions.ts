'use server';
import {IPopularMovies} from "@/models/IPopularMovies";
import {getMoviesBySearch} from "@/api/getMovies";

export const fetchSearchSuggestions = async (query: string | undefined, limit: number = 5): Promise<IPopularMovies[]> => {
    const movies = await getMoviesBySearch(query!);
    return movies.slice(0, limit);
}