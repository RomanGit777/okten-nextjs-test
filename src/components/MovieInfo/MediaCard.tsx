import {IPopularMovies} from "@/models/IPopularMovies";
import {IPopularTv} from "@/models/IPopularTv";
import style from './mediaCard.module.css';
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {GENRE_MAP} from "@/constants/genres";
import Link from "next/link";

type Media = IPopularTv | IPopularMovies;

interface MediaCardProps {
    item: Media;
    shortOverview: string;
}

export const MediaCard = ({item, shortOverview} : MediaCardProps) => {

    const title = "name" in item ? item.name : item.title;

    return (
        <Link href={'/details/' + item.id.toString()}>
            <div className={style.card} role={"button"}>
                <PosterPreview title={title} posterPath={item.poster_path} className={style.cardImg}/>

                <div className={style.text}>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.desc}>{shortOverview}</p>
                    <div className={style.downPart}>
                        <p className={style.rating}
                           style={{backgroundColor: item.vote_average >= 7 ? "green" : "red"}}>
                            {item.vote_average.toFixed(1)}
                        </p>
                        <p className={style.genres}>{item.genre_ids.map(id => GENRE_MAP[id]).join(", ")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};