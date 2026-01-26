// import style from './moviesListCard.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {TvMovieInfo} from "@/components/movieInfo/tvMovieInfo/TvMovieInfo";

interface MoviesListCardTvProps {
    tv: IPopularTv;
}
export const MoviesListCardTv = ({tv}: MoviesListCardTvProps) => {
const shortOverview = tv.overview ? tv.overview.slice(0,50) + "..." : "";
    return <div><TvMovieInfo tv={tv} shortOverview={shortOverview}/></div>
};