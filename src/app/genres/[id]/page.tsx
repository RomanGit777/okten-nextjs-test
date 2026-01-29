import {MoviesByGenrePage} from "@/containers/MoviesByGenrePage/MoviesByGenrePage";
interface genresIdPageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page?: string }>;
}
const GenresIdPage = async ({params, searchParams} : genresIdPageProps) => {
    const {id} =  await params;
    const {page} = await searchParams;
    return <MoviesByGenrePage id={id} page={page || "1"}/>;
};
export default GenresIdPage;