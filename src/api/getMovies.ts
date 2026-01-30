import axios from "axios";
import {ITvDetails} from "@/models/ITvDetails";
import {IPopularBaseTv} from "@/models/IPopularBaseTv";
import {IPopularBaseMovies} from "@/models/IPopularBaseMovies";
import {IMovieDetails} from "@/models/IMovieDetails";
import {IPopularMovies} from "@/models/IPopularMovies";

export const getPopularTv = async (time_window : "day" | "week"): Promise<IPopularBaseTv> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${process.env.API_KEY}`)
    return data
}
export const getPopularTvById = async (id: string): Promise<ITvDetails> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`)
    return data
}
export const getTvByGenre = async (genreId: string, page : string): Promise<IPopularBaseTv> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&page=${page}&api_key=${process.env.API_KEY}`)
    return data;
}

export const getPopularMovies = async (time_window: "day" | "week"): Promise<IPopularBaseMovies> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${process.env.API_KEY}`)
    return data
}
export const getPopularMoviesById = async (id: string): Promise<IMovieDetails> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    return data;
}
export const getMoviesByGenre = async (genreId: string, page : string ): Promise<IPopularBaseMovies> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}&api_key=${process.env.API_KEY}`)
    return data;
}

export const getMoviesBySearch = async (query: string): Promise<IPopularBaseMovies> => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&query=${encodeURIComponent(query)}`
    );

    const filtered = data.results.filter(
        (item: any) => item.media_type === "movie" || item.media_type === "tv"
    );

    return {
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results,
        results: filtered
    };
};

