import {IPopularTv} from "@/models/IPopularTv";
import {MediaCardByGenre} from "@/components/MovieInfo/MediaCardByGenre/MediaCardByGenre";

interface TvListCardProps {
    tv: IPopularTv;
}
export const TvByGenreListCard = ({tv} : TvListCardProps) => {
    const shortOverview = tv.overview ? tv.overview.slice(0,50) + "..." : "";
    return <MediaCardByGenre item={tv} shortOverview={shortOverview} type={"tv"}/>;
};