import {IPopularMovies} from "@/models/IPopularMovies";
import Link from "next/link";
import style from "@/components/movieInfo/tvMovieInfo/movieInfo.module.css";
import {PosterPreview} from "@/components/posterPreview/PosterPreview";
import {GENRE_MAP} from "@/constants/genres";

interface MovieInfoProps {
    movie: IPopularMovies;
    shortOverview: string;
}
export const MovieInfo = ({movie,shortOverview} : MovieInfoProps) => {
    return (
        <Link href={'/details/' + movie.id.toString()}>
            <div className={style.card} role={"button"}>
                <PosterPreview title={movie.title} posterPath={movie.poster_path} className={style.cardImg}/>

                <div className={style.text}>
                    <h2 className={style.title}>{movie.title}</h2>
                    <p className={style.desc}>{shortOverview}</p>
                    <div className={style.downPart}>
                        <p className={style.rating}
                           style={{backgroundColor: movie.vote_average >= 7 ? "green" : "red"}}>
                            {movie.vote_average.toFixed(1)}
                        </p>
                        <p className={style.genres}>{movie.genre_ids.map(id => GENRE_MAP[id]).join(", ")}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};