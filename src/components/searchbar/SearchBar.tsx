'use client';
import style from './style.module.css'
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {useDebounce} from "@/hooks/useDebounce";
import {IPopularMovies} from "@/models/IPopularMovies";
import {fetchSearchSuggestions} from "@/api/fetchSearchSuggestions";

export const SearchBar = () => {
    const [isShown, setIsShown] = useState(false);
    const router = useRouter();
    const [text, setText] = useState("");
    const debouncedText = useDebounce(text, 300);
    const [suggestions, setSuggestions] = useState<IPopularMovies[]>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cancelled = false;

        if (!debouncedText.trim()) {
            Promise.resolve().then(() => {
                if (!cancelled) setSuggestions([])
            });
            return () => { cancelled = true; };
        }
        fetchSearchSuggestions(debouncedText, 5).then(data => {
            if (!cancelled) setSuggestions(data);
        })
        return () => { cancelled = true; };
    }, [debouncedText]);

    useEffect(() => {
        function handleClickOutside(e : MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setIsShown(false);
            }}
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const openBtnHandler = () => {
        setIsShown(true);
    }
   const closeBtnHandler = () => {
        setIsShown(false);
   }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsShown(false);
        router.push(`/search?query=${encodeURIComponent(text)}`)
    }

    return (
        <div className={style.wrapper} ref={wrapperRef}>
            <form onSubmit={handleSubmit}>
                <button onClick={openBtnHandler} className={isShown ? style.buttonActive : style.button} type={"button"}>
                    <svg width="20" height="20" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" color={"#AAB3C0"}>
                    <path
                        d="M7.96163 7.95383L6.29122 6.28718M6.29122 6.28718C6.57695 6.00209 6.8036 5.66365 6.95824 5.29116C7.11288 4.91868 7.19247 4.51945 7.19247 4.11628C7.19247 3.7131 7.11288 3.31388 6.95824 2.94139C6.80361 2.56891 6.57695 2.23046 6.29122 1.94538C6.00549 1.66029 5.66628 1.43414 5.29296 1.27986C4.91964 1.12557 4.51951 1.04616 4.11543 1.04616C3.71135 1.04616 3.31122 1.12557 2.9379 1.27986C2.56457 1.43414 2.22536 1.66029 1.93963 1.94538C1.36258 2.52113 1.03839 3.30203 1.03839 4.11628C1.03839 4.93052 1.36258 5.71142 1.93963 6.28718C2.51669 6.86294 3.29935 7.1864 4.11543 7.1864C4.93151 7.1864 5.71417 6.86294 6.29122 6.28718Z"
                        stroke="#AAB3C0"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                </button>
                {isShown && (
                    <div className={style.inputWrapper}>
                        <input type="text"
                        className={style.input}
                        placeholder={'Enter the film'}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        />
                        <button className={style.closeBtn} onClick={closeBtnHandler} type={"button"}>
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5444 30.4557L30.4557 14.5444M30.4557 30.4557L14.5444 14.5444" stroke="#969696" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        {isShown && suggestions.length > 0 && (
                            <ul className={style.searchDropdown}>
                                {suggestions.map(movie => (
                                    <li key={movie.id}
                                        className={style.searchItem}
                                        role="button"
                                        onClick={() => router.push(`/movie/${movie.id}`)}>
                                        <p className={style.title}>{movie.title}</p>
                                        <p>{movie.release_date}</p>
                                        <p className={style.rating}
                                           style={{ backgroundColor: movie.vote_average >= 7 ? "green" : "red" }} >
                                            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} </p>
                                    </li> ))}
                            </ul> )}

                    </div>
                )}
            </form>
        </div>
);};