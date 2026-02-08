import 'server-only';
import axios from "axios";
import {ITvDetails} from "@/models/ITvDetails";
import {IPopularBaseTv} from "@/models/IPopularBaseTv";
import {IPopularBaseMovies} from "@/models/IPopularBaseMovies";
import {IMovieDetails} from "@/models/IMovieDetails";

export const getPopularTv = async (time_window : "day" | "week"): Promise<IPopularBaseTv> => {
    const res = await
        fetch(`https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${process.env.API_KEY}`,
            {next: {revalidate: 3600},
             cache: "force-cache"
            });
    if (!res.ok) throw new Error("Failed to fetch tv");
    return res.json();
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
    const res = await
        fetch(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${process.env.API_KEY}`,
            {next: {revalidate: 3600},
             cache: "force-cache"
            });
    if (!res.ok) throw new Error("Failed to fetch movies");
    return res.json();
}
export const getPopularMoviesById = async (id: string): Promise<IMovieDetails> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    return data;
}
export const getMoviesByGenre = async (genreId: string, page : string ): Promise<IPopularBaseMovies> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}&api_key=${process.env.API_KEY}`)
    return data;
}

export const getMoviesBySearch = async (query: string, page : number = 1): Promise<IPopularBaseMovies> => {
    const { data } = await axios.get<IPopularBaseMovies>
    (
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&page=${page}&query=${encodeURIComponent(query)}` );
    return data;
};

