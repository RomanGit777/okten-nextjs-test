import {getPopularMovies, getPopularTv} from "@/api/getMovies";
import {MoviesList} from "@/components/moviesList/MoviesList/MoviesList";
import {TvList} from "@/components/moviesList/TvList/TvList";

export const MoviesPage = async () => {
    const [{results: tv}, {results: movies}] = await Promise.all([
        getPopularTv("day"),
        getPopularMovies("day"),
    ]);
    return (
        <section>
            <TvList tv={tv}/>
            <MoviesList movies={movies}/>
        </section>
    );
};