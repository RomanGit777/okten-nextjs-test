import style from './style.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {IPopularMovies} from "@/models/IPopularMovies";
import Link from "next/link";
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {Rating} from "@/components/rating/Rating";
import {Genre} from "@/components/genre/Genre";
import {shortenText} from "@/utils/shortenText";

type Media = IPopularTv | IPopularMovies;

interface MediaCardByGenreProps {
    item: Media;
    type: "tv" | "movie";
}

export const MediaCardByGenre = ({item, type}: MediaCardByGenreProps) => {

    const shortOverview = shortenText(item.overview)
    const title = "name" in item ? item.name : item.title;

    return (
        <Link href={`/${type}/${item.id}`} className={style.card}>
                <PosterPreview title={title} posterPath={item.poster_path} className={style.cardImg}/>
                <div className={style.text}>
                    <h2 className={style.title}>{title}</h2>
                    <p>{shortOverview}</p>
                    <div className={style.downPart}>
                        <Rating value={item.vote_average}/>
                        <Genre ids={item.genre_ids}/>
                    </div>
                </div>
        </Link>
    );
};