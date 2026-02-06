import style from './style.module.css';

export const Rating = ({value} : {value : number}) => {
    const color = value >= 7 ? "green" : "red";
    return (
        <p className={style.rating} style={{ backgroundColor: color }}>
            {value ? value.toFixed(1) : "N/A"}
        </p>
    );
};