import {getMoviesByGenre, getTvByGenre} from "@/api/getMovies";
import {MoviesByGenreList} from "@/components/moviesList/MoviesByGenreList/MoviesByGenreList";
import {TvByGenreList} from "@/components/moviesList/TvByGenreList/TvByGenreList";
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

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

    const totalPages = Math.max(moviesPages, tvPages);

    return (
        <div style={{paddingBottom: "20px", paddingTop: "60px"}}>
            {movies.length > 0 && <MoviesByGenreList movies={movies}/>}
            {tv.length > 0 && <TvByGenreList tv={tv}/>}
            <PaginationComponent
                totalPages={totalPages}
                currentPage={currentPage}/>
        </div>
    );
};