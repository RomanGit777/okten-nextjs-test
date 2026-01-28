import style from './style.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {IPopularMovies} from "@/models/IPopularMovies";

type Media = IPopularTv | IPopularMovies;

interface MediaCardByGenreProps {
    item: Media;
    shortOverview: string;
    type: "tv" | "movie";
}

export const MediaCardByGenre = ({item, shortOverview, type}: MediaCardByGenreProps) => {
    return (
        <></>
    );
};