import {MediaDetails} from "@/components/mediaDetails/mediaDetails";

type MovieDetailsProps = {
    params: Promise<{ id: string }>;
}
const MovieIdPage = async ({params} : MovieDetailsProps) => {
    const {id} = await params;
    return <MediaDetails id={id} type="movie"/>;
};
export default MovieIdPage;