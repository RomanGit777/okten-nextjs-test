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
                <p className={style.rating}
                   style={{backgroundColor: tv.vote_average >= 7 ? "green" : "red"}}>
                    {tv.vote_average.toFixed(1)}
                </p>
            </div>
        </div>
    );
};