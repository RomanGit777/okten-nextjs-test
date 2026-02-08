import style from './style.module.css'
import {getMoviesBySearch} from "@/api/getMovies";
import {MoviesBySearchList} from "@/components/moviesList/MoviesBySearchList/MoviesBySearchList";
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

interface MoviesBySearchProps {
    query: string;
    page: string;
}
export const MoviesBySearch = async ({query, page} : MoviesBySearchProps) => {
    const currentPage = Number(page || 1);

    const {results: movies, total_pages} = await getMoviesBySearch(query, currentPage);
        return (
            <div className={style.wrapper}>
                <MoviesBySearchList movies={movies}/>
               <PaginationComponent currentPage={currentPage} totalPages={total_pages} maxVisible={5}/>
            </div>
        );
};