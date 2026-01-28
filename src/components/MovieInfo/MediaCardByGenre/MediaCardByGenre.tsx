import style from './style.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {IPopularMovies} from "@/models/IPopularMovies";
import Link from "next/link";
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {GENRE_MAP} from "@/constants/genres";

type Media = IPopularTv | IPopularMovies;

interface MediaCardByGenreProps {
    item: Media;
    shortOverview: string;
    type: "tv" | "movie";
}

export const MediaCardByGenre = ({item, shortOverview, type}: MediaCardByGenreProps) => {

    const title = "name" in item ? item.name : item.title;

    return (
        <Link href={`/${type}/` + item.id.toString()}>
            <div className={style.card} role={"button"}>
                <PosterPreview title={title} posterPath={item.poster_path} className={style.cardImg}/>

                <div className={style.text}>
                    <h2 className={style.title}>{title}</h2>
                    <p>{shortOverview}</p>
                    <div className={style.downPart}>
                        <p className={style.rating} style={{backgroundColor: item.vote_average >= 7 ? "green" : "red"}}>
                            {item.vote_average.toFixed(1)}</p>
                        <p className={style.genre}>{item.genre_ids.map(id => GENRE_MAP[id]).join(", ")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};