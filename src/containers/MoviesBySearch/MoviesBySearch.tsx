import {getMoviesBySearch} from "@/api/getMovies";
import {MoviesBySearchList} from "@/components/moviesList/MoviesBySearchList/MoviesBySearchList";

interface MoviesBySearchProps {
    query: string
}
export const MoviesBySearch = async ({query} : MoviesBySearchProps) => {
    console.log(query);
    const {results: movies} = await getMoviesBySearch(query);
    console.log(movies);
    return (
        <div style={{paddingBottom: "20px", paddingTop: "60px"}}>
            <MoviesBySearchList movies={movies}/>
        </div>
    );
};