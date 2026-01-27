'use client';
import style from './style.module.css'
import {useRef, useState} from "react";
import {GENRE_MAP} from "@/constants/genres";

export const GenresSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef<HTMLDivElement | null>(null);

    const btnHandler = () => {
        setIsOpen(true);
        listRef.current?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className={style.wrapper}>
            <div className={style.topWrapper}>
                <button onClick={btnHandler} className={style.btn}>Genres</button>
            </div>

            <div className={style.genresSection} ref={listRef}>
                {isOpen &&
                    <ul className={style.allGenres}>
                        {Object.entries(GENRE_MAP).map(([id, name]) => <li key={id}>{name}</li>)}
                    </ul>
                }
            </div>
        </div>
    );
};