import axios from "axios";
import {IPopularTvBase} from "@/models/IPopularTvBase";
import {IPopularTv} from "@/models/IPopularTv";

export const getPopularTv = async (time_window: "day" | "week"): Promise<IPopularTvBase> => {
    const result = await axios.get(`https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${process.env.API_KEY}`)
    return result.data
}
export const getPopularTvById = async (id: string): Promise<IPopularTv> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`)
    return data
}