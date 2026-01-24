import style from './movieInfo.module.css'
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {IPopularTv} from "@/models/IPopularTv";
interface movieInfoProps {
    tv: IPopularTv;
    shortOverview: string;
}
export const MovieInfo = ({tv, shortOverview}: movieInfoProps) => {

    return (
        <div className={style.card}>
            <PosterPreview title={tv.name} posterPath={tv.poster_path} className={style.cardImg}/>

            <div className={style.text}>
                <h2 className={style.title}>{tv.name}</h2>
                <p className={style.desc}>{shortOverview}</p>
            </div>
        </div>
    );
};