import style from'./style.module.css'
import {GENRE_MAP} from "@/constants/genres";
import {getPopularTvById} from "@/api/getMovies";
import {PosterPreview} from "@/components/posterPreview/PosterPreview";

type MovieDetailsProps = {
    id: string;
}

export const MovieDetails = async ({id}:MovieDetailsProps) => {

    const tv = await getPopularTvById(id);

    return (
        <div className={style.wrapper} role={"button"}>
            <PosterPreview title={tv.name} posterPath={tv.poster_path} className={style.cardImg}/>

            <div className={style.text}>
                <h2 className={style.title}>{tv.name}</h2>
                <p className={style.desc}>{tv.overview}</p>
                <div className={style.downPart}>
                    <p className={style.rating}
                       style={{backgroundColor: tv.vote_average >= 7 ? "green" : "red"}}>
                        {tv.vote_average.toFixed(1)}
                    </p>
                    <p className={style.genres}>{tv.genres.map(g => GENRE_MAP[g.id]).join(", ")}</p>
                </div>
            </div>
        </div>
    );
};