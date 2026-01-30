import {MoviesBySearch} from "@/containers/MoviesBySearch/MoviesBySearch";
interface MoviesPageBySearchPage {
    searchParams: Promise<{query: string}>;
}
const MoviesBySearchPage = async ({searchParams} : MoviesPageBySearchPage) => {
    const {query} = await searchParams;
    // console.log(query);
    return <MoviesBySearch query={query}/>;
};
export default MoviesBySearchPage;