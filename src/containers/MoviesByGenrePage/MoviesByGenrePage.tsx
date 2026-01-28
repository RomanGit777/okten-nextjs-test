import {getMoviesByGenre, getTvByGenre} from "@/api/getMovies";
import {MoviesByGenreList} from "@/components/moviesList/MoviesByGenreList/MoviesByGenreList";
import {TvByGenreList} from "@/components/moviesList/TvByGenreList/TvByGenreList";

interface MoviesByGenrePageProps {
    id : string;
}
export const MoviesByGenrePage = async ({id} : MoviesByGenrePageProps) => {
    const [{results: movies},{results: tv}] = await Promise.all([
        getMoviesByGenre(id),
        getTvByGenre(id)
    ])
    return (
        <>
            <MoviesByGenreList movies={movies}/>
            <TvByGenreList tv={tv}/>
        </>
    );
};