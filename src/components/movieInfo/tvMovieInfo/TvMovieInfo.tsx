import style from './movieInfo.module.css'
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {IPopularTv} from "@/models/IPopularTv";
import {GENRE_MAP} from "@/constants/genres";
import Link from "next/link";
interface TvMovieInfoProps {
    tv: IPopularTv;
    shortOverview: string;
}
export const TvMovieInfo = ({tv, shortOverview}: TvMovieInfoProps) => {

    return (
        <Link href={'/details/' + tv.id.toString()}>
            <div className={style.card} role={"button"}>
                <PosterPreview title={tv.name} posterPath={tv.poster_path} className={style.cardImg}/>

                <div className={style.text}>
                    <h2 className={style.title}>{tv.name}</h2>
                    <p className={style.desc}>{shortOverview}</p>
                    <div className={style.downPart}>
                        <p className={style.rating}
                           style={{backgroundColor: tv.vote_average >= 7 ? "green" : "red"}}>
                            {tv.vote_average.toFixed(1)}
                        </p>
                        <p className={style.genres}>{tv.genre_ids.map(id => GENRE_MAP[id]).join(", ")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};