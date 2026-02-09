import style from './style.module.css'
import {getTvByGenre} from "@/api/tv/getTv";
import {MoviesByGenreList} from "@/components/moviesList/MoviesByGenreList/MoviesByGenreList";
import {TvByGenreList} from "@/components/moviesList/TvByGenreList/TvByGenreList";
import {PaginationComponent} from "@/components/Pagination/PaginationComponent";
import {getMoviesByGenre} from "@/api/movies/getMovies";

interface MoviesByGenrePageProps {
    id : string;
    page : string ;
}
export const MoviesByGenrePage = async ({id, page} : MoviesByGenrePageProps) => {
    const currentPage = Number(page || 1);

    const [{results: movies, total_pages: moviesPages},{results: tv, total_pages: tvPages}] = await Promise.all([
        getMoviesByGenre(id, String(page)),
        getTvByGenre(id, String(page))
    ]);

    const totalPages = Math.min(Math.max(moviesPages, tvPages), 500);

    return (
        <div className={style.wrapper}>
            {movies.length > 0 && <MoviesByGenreList movies={movies}/>}
            {tv.length > 0 && <TvByGenreList tv={tv}/>}
            <PaginationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                maxVisible={5}
            />
        </div>
    );
};