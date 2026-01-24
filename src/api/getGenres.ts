import {IGenresBase} from "@/models/IGenresBase";
import axios from "axios";

export const getGenres = async (): Promise<IGenresBase> => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}`);
    return data
}