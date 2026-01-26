import {getPopularMovies, getPopularTv} from "@/api/getMovies";
import {TvMoviesList} from "@/components/moviesList/MoviesListTv/TvMoviesList";
import {MoviesList} from "@/components/moviesList/MoviesList/MoviesList";

export const MoviesPage = async () => {
    const {results: tv} = await getPopularTv("week");
    const {results: movies} = await getPopularMovies("week");

    return (
        <>
            <TvMoviesList tv={tv}/>
            <MoviesList movies={movies}/>
        </>
    );
};