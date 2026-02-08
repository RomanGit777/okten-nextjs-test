import {IPopularTv} from "@/models/IPopularTv";
import {MediaCard} from "@/components/MovieInfo/MediaCard/MediaCard";
import style from "@/components/moviesListCard/MoviesListCard/moviesListCard.module.css";

interface TvCardProps {
    tv: IPopularTv;
}
export const TvListCard = ({tv}: TvCardProps) => {
    return (
        <div className={style.cardWrapper}>
            <MediaCard item={tv} mediaType={"tv"}/>
        </div>
            );
};