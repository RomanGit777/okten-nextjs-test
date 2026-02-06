import {IPopularMovies} from "@/models/IPopularMovies";
import {IPopularTv} from "@/models/IPopularTv";
import style from './mediaCard.module.css';
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {GENRE_MAP} from "@/constants/genres";
import Link from "next/link";
import {Rating} from "@/components/rating/Rating";
import {Genre} from "@/components/genre/Genre";

type Media = IPopularTv | IPopularMovies;

interface MediaCardProps {
    item: Media;
    shortOverview: string;
    type: "tv" | "movie";
}

export const MediaCard = ({item, shortOverview, type} : MediaCardProps) => {

    const title = "name" in item ? item.name : item.title;

    return (
        <Link href={`/${type}/` + item.id.toString()}>
            <div className={style.card} role={"button"}>
                <PosterPreview title={title} posterPath={item.poster_path} className={style.cardImg}/>

                <div className={style.text}>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.desc}>{shortOverview}</p>
                    <div className={style.downPart}>
                        <Rating value={item.vote_average}/>
                        <Genre ids={item.genre_ids}/>
                    </div>
                </div>
            </div>
        </Link>
    );
};