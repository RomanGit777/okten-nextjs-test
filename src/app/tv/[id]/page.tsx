import {MediaDetails} from "@/components/mediaDetails/mediaDetails";

type MovieDetailsProps = {
    params: Promise<{ id: string }>;
}
const TvIdPage = async ({params} : MovieDetailsProps) => {
    const {id} = await params;
    return <MediaDetails id={id} type="tv"/>;
};
export default TvIdPage;