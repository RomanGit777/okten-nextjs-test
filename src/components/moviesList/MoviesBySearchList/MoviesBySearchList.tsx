import style from '../MoviesByGenreList/style.module.css'
import {IPopularMovies} from "@/models/IPopularMovies";
import {MoviesBySearchListCard} from "@/components/moviesListCard/MoviesBySearchListCard/MoviesBySearchListCard";

interface MoviesBySearchListProps {
    movies: IPopularMovies[];
}

export const MoviesBySearchList = ({movies} : MoviesBySearchListProps) => {

    return (
        <div className={style.gridContainer}>
            {movies.map(m => <MoviesBySearchListCard movie={m} key={m.id}/>)}
        </div>
    );
};