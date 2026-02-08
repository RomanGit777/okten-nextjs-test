import style from './moviesListCard.module.css'
import {IPopularMovies} from "@/models/IPopularMovies";
import {MediaCard} from "@/components/MovieInfo/MediaCard/MediaCard";

interface MoviesListCardProps {
    movie: IPopularMovies;
}
export const MoviesListCard = ({movie} : MoviesListCardProps) => {
    return (
        <div className={style.cardWrapper}>
            <MediaCard item={movie} mediaType={'movie'}/>
        </div>)
    ;
};