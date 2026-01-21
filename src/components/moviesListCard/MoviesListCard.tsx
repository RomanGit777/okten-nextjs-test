// import style from './moviesListCard.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {MovieInfo} from "@/components/movieInfo/MovieInfo";

interface MoviesListCardProps {
    tv: IPopularTv;
}
export const MoviesListCard = ({tv}: MoviesListCardProps) => {
    return <div><MovieInfo tv={tv}/></div>
};