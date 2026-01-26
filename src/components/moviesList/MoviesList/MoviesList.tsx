import {IPopularMovies} from "@/models/IPopularMovies";
import {MoviesListCard} from "@/components/moviesListCard/MoviesListCard/MoviesListCard";
import style from "@/components/moviesList/MoviesListTv/moviesList.module.css";
import {SliderWrapper} from "@/components/sliderWrapper/SliderWrapper";
import {SliderArrows} from "@/components/sliderArrows/SliderArrows";

interface MoviesListProps {
    movies: IPopularMovies[];
}
export const MoviesList = ({movies} : MoviesListProps) => {
    return (
        <div className={style.moviesListContainer}>
            <div className={'tvShows'}>
                <h1 className={style.title}>Popular Movies</h1>
                    <SliderWrapper Arrows={SliderArrows}>
                        {movies.map(movie => <MoviesListCard movie={movie} key={movie.id}/>)}
                    </SliderWrapper>
            </div>

        </div>);
};
