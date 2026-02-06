import style from './style.module.css';

export const Rating = ({value, className} : {value : number, className? : string}) => {
    const color = value >= 7 ? "green" : "red";
    return (
        <p className={`${style.rating} ${className ?? ""}`}
           style={{ backgroundColor: color }}>
            {value ? value.toFixed(1) : "N/A"}
        </p>
    );
};