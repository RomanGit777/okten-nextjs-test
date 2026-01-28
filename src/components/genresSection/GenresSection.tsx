'use client';
import style from './style.module.css'
import {GENRE_MAP} from "@/constants/genres";

export const GenresSection = () => {

 return (
        <div className={style.wrapper}>
                    <ul className={style.allGenres}>
                        {Object.entries(GENRE_MAP).map(([id, name]) => <li key={id}>{name}</li>)}
                    </ul>
        </div>
    );
};