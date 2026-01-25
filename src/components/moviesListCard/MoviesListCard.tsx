// import style from './moviesListCard.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {MovieInfo} from "@/components/movieInfo/MovieInfo";

interface MoviesListCardProps {
    tv: IPopularTv;
}
export const MoviesListCardTv = ({tv}: MoviesListCardProps) => {
const shortOverview = tv.overview ? tv.overview.slice(0,50) + "..." : "";
    return <div><MovieInfo tv={tv} shortOverview={shortOverview}/></div>
};