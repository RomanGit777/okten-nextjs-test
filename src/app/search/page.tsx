import {MoviesBySearch} from "@/containers/MoviesBySearch/MoviesBySearch";
interface MoviesPageBySearchPage {
    params: Promise<{query: string}>;
}
const MoviesBySearchPage = async ({params} : MoviesPageBySearchPage) => {
    const {query} = await params;
    return <MoviesBySearch query={query}/>;
};
export default MoviesBySearchPage;