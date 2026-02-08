import style from '../MoviesByGenreList/style.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {TvByGenreListCard} from "@/components/moviesListCard/TvByGenreListCard/TvByGenreListCard";

interface TvByGenreListProps {
    tv: IPopularTv[];
}
export const TvByGenreList = ({tv} : TvByGenreListProps) => {
    return (
        <div  className={style.gridContainer}>
            {tv.map(item => <TvByGenreListCard key={item.id} tv={item}/>)}
        </div>
    );
};