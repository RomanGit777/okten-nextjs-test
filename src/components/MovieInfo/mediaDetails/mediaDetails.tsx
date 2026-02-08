import style from './style.module.css'
import {getMoviesById, getTvById} from "@/api/getMovies";
import {Rating} from "@/components/Rating/Rating";
import {PosterPreview} from "@/components/PosterPreview/PosterPreview";
import {Genre} from "@/components/Genre/Genre";

type MovieDetailsProps = {
    id: string;
    type: "tv" | "movie";
}

export const MediaDetails = async ({id, type}:MovieDetailsProps) => {

    const data =
        type === "movie"
        ? await getMoviesById(id)
        : await getTvById(id);

    const title : string = "name" in data ? data.name : data.title;
    return (
        <div className={style.wrapper}>
            <PosterPreview title={title} posterPath={data.poster_path} className={style.cardImg}/>

            <div className={style.text}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.desc}>{data.overview}</p>
                <div className={style.downPart}>
                    <Rating value={data.vote_average} className={style.detailsRating}/>
                    <Genre ids={data.genres.map(g => g.id)} className={style.detailsGenre}/>
                </div>
            </div>
        </div>
    );
};