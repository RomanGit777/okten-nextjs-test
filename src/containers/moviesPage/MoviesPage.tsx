import {MoviesList} from "@/components/moviesList/MoviesList";
import {getPopularTv} from "@/api/getMovies";

export const MoviesPage = async () => {
    const {results} = await getPopularTv("week");
    return (
        <MoviesList tv={results}/>
    );
};