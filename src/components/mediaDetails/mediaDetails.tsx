import style from'./style.module.css'
import {GENRE_MAP} from "@/constants/genres";
import {getPopularMoviesById, getPopularTvById} from "@/api/getMovies";
import {PosterPreview} from "@/components/posterPreview/PosterPreview";

type MovieDetailsProps = {
    id: string;
    type: "tv" | "movie";
}

export const MediaDetails = async ({id, type}:MovieDetailsProps) => {

    const data =
        type === "movie"
        ? await getPopularMoviesById(id)
        : await getPopularTvById(id);

    const title : string = "name" in data ? data.name : data.title;
    const genres = data.genres.map(g => GENRE_MAP[g.id]).join(", ");
    return (
        <div className={style.wrapper} role={"button"}>
            <PosterPreview title={title} posterPath={data.poster_path} className={style.cardImg}/>

            <div className={style.text}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.desc}>{data.overview}</p>
                <div className={style.downPart}>
                    <p className={style.rating}
                       style={{backgroundColor: data.vote_average >= 7 ? "green" : "red"}}>
                        {data.vote_average.toFixed(1)}
                    </p>
                    <p className={style.genres}>{genres}</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};