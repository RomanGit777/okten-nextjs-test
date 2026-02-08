import style from './style.module.css'
import { MovieByGenreListCard } from "@/components/moviesListCard/MovieByGenreListCard/MovieByGenreListCard";
import {IPopularMovies} from "@/models/IPopularMovies";

interface MoviesByGenreListProps {
    movies: IPopularMovies[];
}
export const MoviesByGenreList = ({movies} : MoviesByGenreListProps) => {
    return (
        <div  className={style.gridContainer}>
            {movies.map(m => <MovieByGenreListCard key={m.id} movie={m}/>)}
        </div>
    );
};