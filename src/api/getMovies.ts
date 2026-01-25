import axios from "axios";
import {ITVDetails} from "@/models/ITvDetails";
import {IPopularBase} from "@/models/IPopularBase";

export const getPopularTv = async (time_window: "day" | "week"): Promise<IPopularBase> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${process.env.API_KEY}`)
    return data
}
export const getPopularTvById = async (id: string): Promise<ITVDetails> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`)
    return data
}
export const getPopularMovies = async (time_window: "day" | "week"): Promise<IPopularBase> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${process.env.API_KEY}`)
    return data
}