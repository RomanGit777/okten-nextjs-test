import axios from "axios";
import {IPopularTvBase} from "@/models/IPopularTvBase";
import {ITVDetails} from "@/models/ITvDetails";

export const getPopularTv = async (time_window: "day" | "week"): Promise<IPopularTvBase> => {
    const result = await axios.get(`https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${process.env.API_KEY}`)
    return result.data
}
export const getPopularTvById = async (id: string): Promise<ITVDetails> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`)
    return data
}