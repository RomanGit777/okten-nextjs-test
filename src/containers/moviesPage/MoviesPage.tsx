import {getPopularMovies, getPopularTv} from "@/api/getMovies";
import {TvMoviesList} from "@/components/moviesList/MoviesListTv/TvMoviesList";
import {MoviesList} from "@/components/moviesList/MoviesList/MoviesList";

export const MoviesPage = async () => {
    const [{results: tv}, {results: movies}] = await Promise.all([
        getPopularTv("day"),
        getPopularMovies("day"),
    ]);

    return (
        <>
            <TvMoviesList tv={tv}/>
            <MoviesList movies={movies}/>
        </>
    );
};