// import style from './moviesListCard.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {MediaCard} from "@/components/MovieInfo/MediaCard";

interface MoviesListCardTvProps {
    tv: IPopularTv;
}
export const MoviesListCardTv = ({tv}: MoviesListCardTvProps) => {
const shortOverview = tv.overview ? tv.overview.slice(0,50) + "..." : "";
    return <MediaCard item={tv} shortOverview={shortOverview}/>;
};