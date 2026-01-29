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
        <div style={{paddingBottom: "20px", paddingTop: "60px"}}>
            {movies.length > 0 && <MoviesByGenreList movies={movies}/>}
            {tv.length > 0 && <TvByGenreList tv={tv}/>}
        </div>
    );
};