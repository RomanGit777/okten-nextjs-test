'use client';
import style from './style.module.css'
import {useEffect, useRef, useState} from "react";
import {GENRE_MAP} from "@/constants/genres";

export const GenresSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        const handleHash = () => {
            if (window.location.hash === "#genres") {
                setIsOpen(true);
                setTimeout(() => {
                    listRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 50);
            }
        };
        handleHash();

        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);


    return (
        <div id={"#genres"} className={style.wrapper}>

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