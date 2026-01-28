'use client';
import style from './style.module.css'
import {GENRE_MAP} from "@/constants/genres";

export const GenresSection = () => {

 return (
        <div className={style.wrapper}>
            <h1 className={style.title}>Genres</h1>
                    <ul className={style.genresContainer}>
                        {Object.entries(GENRE_MAP).map(([id, name]) => <li key={id} className={style.genresList}>{name}</li>)}
                    </ul>
        </div>
    );
};