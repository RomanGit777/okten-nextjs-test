import {MoviesByGenrePage} from "@/containers/MoviesByGenrePage/MoviesByGenrePage";
interface genresIdPageProps {
    params: {id : string};
    searchParams : { page? : string };
}
const GenresIdPage = async ({params, searchParams} : genresIdPageProps) => {
    const id =  params.id;
    const page = searchParams.page || "1";
    return <MoviesByGenrePage id={id} page={page}/>;
};
export default GenresIdPage;