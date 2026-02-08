import style from './style.module.css'
import {GENRE_MAP} from "@/constants/genres";

export const Genre = ({ids, className} : {ids : number[], className? : string}) => {
   if (!ids.length) return <span>Unknown</span>
    return (
        <span className={`${style.genres} ${className ?? ""}`}>
            {ids.map(id => GENRE_MAP[id]).join(", ")}
        </span>
    );
};