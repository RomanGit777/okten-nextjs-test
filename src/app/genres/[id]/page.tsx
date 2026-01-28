import {MoviesByGenrePage} from "@/containers/MoviesByGenrePage/MoviesByGenrePage";
interface genresIdPageProps {
    params: Promise<{id : string}>
}
const GenresIdPage = async ({params} : genresIdPageProps) => {
    const {id} = await params;
    return <MoviesByGenrePage id={id}/>;
};
export default GenresIdPage;