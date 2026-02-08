import style from './style.module.css'
import {GENRE_MAP} from "@/constants/genres";
import Link from "next/link";

export const GenresSection = () => {

 return (

        <div className={style.wrapper}>
            <h1 className={style.title}>Genres</h1>
                    <ul className={style.genresContainer}>
                        {Object.entries(GENRE_MAP).map(([id, name]) =>
                                <li className={style.genresList} key={id}>
                                    <Link href={`/genres/${id}`}>{name}</Link>
                                </li>
                           )}
                    </ul>
        </div>
    );
};