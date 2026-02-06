import style from '../MoviesByGenreList/style.module.css'
import {IPopularMovies} from "@/models/IPopularMovies";
import {MoviesBySearchListCard} from "@/components/moviesListCard/MoviesBySearchListCard/MoviesBySearchListCard";

interface MoviesBySearchListProps {
    movies: IPopularMovies[];
}

export const MoviesBySearchList = ({movies} : MoviesBySearchListProps) => {
    if (!movies.length) return <div className={style.failPage}>
        <p>We could not find anything</p>
        <p>Are there any grammatical errors in the request?</p></div> ;
    return (
        <div className={style.gridContainer}>
            {movies.map(m => <MoviesBySearchListCard movie={m} key={m.id}/>)}
        </div>
    );
};