import {IPopularTv} from "@/models/IPopularTv";
import {MediaCardByGenre} from "@/components/MovieInfo/MediaCardByGenre/MediaCardByGenre";

interface TvListCardProps {
    tv: IPopularTv;
}
export const TvByGenreListCard = ({tv} : TvListCardProps) => {
    return <MediaCardByGenre item={tv} type={"tv"}/>;
};