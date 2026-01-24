import style from "@/components/movieInfo/movieInfo.module.css";
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {GENRE_MAP} from "@/constants/genres";
import {getPopularTvById} from "@/api/getMovies";

export const MovieDetails = async () => {
    const tv = await getPopularTvById("")
    return (
        <div className={style.card} role={"button"}>
            {/*<PosterPreview title={tv.name} posterPath={tv.poster_path} className={style.cardImg}/>*/}

            {/*<div className={style.text}>*/}
            {/*    <h2 className={style.title}>{tv.name}</h2>*/}
            {/*    <p className={style.desc}>{shortOverview}</p>*/}
            {/*    <div className={style.downPart}>*/}
            {/*        <p className={style.rating}*/}
            {/*           style={{backgroundColor: tv.vote_average >= 7 ? "green" : "red"}}>*/}
            {/*            {tv.vote_average.toFixed(1)}*/}
            {/*        </p>*/}
            {/*        <p className={style.genres}>{tv.genre_ids.map(id => GENRE_MAP[id]).join(", ")}</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};