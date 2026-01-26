import axios from "axios";
import {ITvDetails} from "@/models/ITvDetails";
import {IPopularBaseTv} from "@/models/IPopularBaseTv";
import {IPopularBaseMovies} from "@/models/IPopularBaseMovies";
import {IMovieDetails} from "@/models/IMovieDetails";

export const getPopularTv = async (time_window: "day" | "week"): Promise<IPopularBaseTv> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${process.env.API_KEY}`)
    return data
}
export const getPopularTvById = async (id: string): Promise<ITvDetails> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`)
    return data
}

export const getPopularMovies = async (time_window: "day" | "week"): Promise<IPopularBaseMovies> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${process.env.API_KEY}`)
    return data
}
export const getPopularMoviesById = async (id: string): Promise<IMovieDetails> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}`)
    return data;
}