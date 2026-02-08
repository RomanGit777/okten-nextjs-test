import {IPopularMovies} from "@/models/IPopularMovies";
import {IPopularTv} from "@/models/IPopularTv";
import style from './mediaCard.module.css';
import Link from "next/link";
import {Rating} from "@/components/Rating/Rating";
import {shortenText} from "@/utils/shortenText";
import {PosterPreview} from "@/components/PosterPreview/PosterPreview";
import {Genre} from "@/components/Genre/Genre";

type Media = IPopularTv | IPopularMovies;

interface MediaCardProps {
    item: Media;
    mediaType: "tv" | "movie";
}

export const MediaCard = ({item, mediaType} : MediaCardProps) => {

    const shortOverview = shortenText(item.overview)
    const title = "name" in item ? item.name : item.title;

    return (
        <Link href={`/${mediaType}/${item.id}`} className={style.card}>
                <PosterPreview title={title} posterPath={item.poster_path} className={style.cardImg}/>
                <div className={style.text}>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.desc}>{shortOverview}</p>
                    <div className={style.downPart}>
                        <Rating value={item.vote_average}/>
                        <Genre ids={item.genre_ids}/>
                    </div>
                </div>
        </Link>
    );
};