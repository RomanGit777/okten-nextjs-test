'use client';
import style from './style.module.css'
import {useEffect, useRef, useState} from "react";
import {GENRE_MAP} from "@/constants/genres";

export const GenresSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef<HTMLUListElement | null>(null);

    const btnHandler = () => {
        setIsOpen(true);
        listRef.current?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className={style.wrapper}>
            <div>
                <button onClick={btnHandler} className={style.btn}>Genres</button>
            </div>

            <div className={style.allGenres}>
                {isOpen &&
                    <ul className={style.allGenres} ref={listRef}>
                        {Object.entries(GENRE_MAP).map(([id, name]) => <li key={id}>{name}</li>)}
                    </ul>
                }
            </div>
        </div>
    );
};