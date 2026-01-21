import style from './movieInfo.module.css'
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {IPopularTv} from "@/models/IPopularTv";
interface movieInfoProps {
    tv: IPopularTv;
}
export const MovieInfo = ({tv}: movieInfoProps) => {

    return (
        <div className={style.movieInfoCard}>
            <PosterPreview title={tv.name} posterPath={tv.poster_path} className={style.cardImg}/>

        </div>
    );
};