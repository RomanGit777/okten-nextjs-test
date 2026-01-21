import {MoviesListCard} from "@/components/moviesListCard/MoviesListCard";
import {IPopularTv} from "@/models/IPopularTv";
import style from './moviesList.module.css'
interface MoviesListProps{
    tv: IPopularTv[]
}
export const MoviesList = ({tv}: MoviesListProps) => {
    return (
        <div className={style.moviesListContainer}>
            <h1 className={style.title}>Popular Tv Shows</h1>
            <div className={style.slider}>
                {tv.map(tv => <MoviesListCard tv={tv} key={tv.id}/>)}
            </div>
        </div>
    );
};