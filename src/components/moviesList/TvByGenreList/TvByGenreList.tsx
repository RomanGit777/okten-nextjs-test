import {IPopularTv} from "@/models/IPopularTv";
import {TvByGenreListCard} from "@/components/moviesListCard/TvByGenreListCard/TvByGenreListCard";

interface TvByGenreListProps {
    tv: IPopularTv[];
}
export const TvByGenreList = ({tv} : TvByGenreListProps) => {
    return (
        <div>
            {tv.map(tv => <TvByGenreListCard key={tv.id} tv={tv}/>)}
        </div>
    );
};