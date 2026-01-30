import {getMoviesBySearch} from "@/api/getMovies";
import {MoviesBySearchList} from "@/components/moviesList/MoviesBySearchList/MoviesBySearchList";

interface MoviesBySearchProps {
    query: string
}
export const MoviesBySearch = async ({query} : MoviesBySearchProps) => {
    const {results: movies} = await getMoviesBySearch(query);
    console.log(movies);
    return <MoviesBySearchList movies={movies}/>;
};