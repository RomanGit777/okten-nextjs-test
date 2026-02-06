import style from './style.module.css'
import {GENRE_MAP} from "@/constants/genres";

export const Genre = ({ids} : {ids : number[]}) => {
   if (!ids.length) return <span>Unknown</span>
    return (
        <span className={style.genres}>
            {ids.map(id => GENRE_MAP[id]).join(", ")}
        </span>
    );
};