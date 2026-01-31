import {MoviesBySearch} from "@/containers/MoviesBySearch/MoviesBySearch";
interface MoviesPageBySearchPage {
    searchParams: Promise<{query: string, page: string}>;
}
const MoviesBySearchPage = async ({searchParams} : MoviesPageBySearchPage) => {
    const {query, page} = await searchParams;

    const safeQuery = query ?? "";
    const safePage = page && page !== "" ? page : "1";

    // console.log(safeQuery);
    // console.log(safePage);
    return <MoviesBySearch query={safeQuery} page={safePage} />;
};
export default MoviesBySearchPage;