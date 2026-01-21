import axios from "axios";
import {IPopularTvBase} from "@/models/IPopularTvBase";

export const getPopularTv = async (time_window: "day" | "week"): Promise<IPopularTvBase> => {
    const result = await axios.get(`https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${process.env.API_KEY}`)
    return result.data
}