import {getPopularTv} from "@/api/tv/getTv";
import {MoviesList} from "@/components/moviesList/MoviesList/MoviesList";
import {TvList} from "@/components/moviesList/TvList/TvList";
import {getPopularMovies} from "@/api/movies/getMovies";

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