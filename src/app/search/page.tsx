import {MoviesBySearch} from "@/containers/MoviesBySearch/MoviesBySearch";
interface MoviesPageBySearchPage {
    searchParams: Promise<{query: string, page: string}>;
}
const MoviesBySearchPage = async ({searchParams} : MoviesPageBySearchPage) => {
    const {query, page} = await searchParams;
    // console.log(query);
    return <MoviesBySearch query={query} page={page || "1"} />;
};
export default MoviesBySearchPage;