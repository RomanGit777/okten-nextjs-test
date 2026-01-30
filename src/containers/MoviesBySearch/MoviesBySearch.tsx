import {getMoviesBySearch} from "@/api/getMovies";
import {MoviesBySearchList} from "@/components/moviesList/MoviesBySearchList/MoviesBySearchList";
import {PaginationComponent} from "@/components/pagination/PaginationComponent";

interface MoviesBySearchProps {
    query: string;
    page: string;
}
export const MoviesBySearch = async ({query, page} : MoviesBySearchProps) => {
    const currentPage = Number(page || 1);

    // const totalPages = 5;

    const {results: movies, total_pages} = await getMoviesBySearch(query, String(page));
    return (
        <div style={{paddingBottom: "20px", paddingTop: "60px"}}>
            <MoviesBySearchList movies={movies}/>
            <PaginationComponent
                totalPages={total_pages}
                currentPage={currentPage}/>
        </div>
    );
};