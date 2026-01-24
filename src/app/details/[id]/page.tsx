import {MovieDetails} from "@/components/movieDetails/MovieDetails";
type MovieDetailsProps = {
    params: Promise<{ id: string }>;
}
const TvIdPage = async ({params} : MovieDetailsProps) => {
    const {id} = await params;
    return <MovieDetails id={id}/>;
};
export default TvIdPage;