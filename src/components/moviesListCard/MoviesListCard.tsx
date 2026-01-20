import style from './moviesListCard.module.css'
export const MoviesListCard = () => {
    return (
        <div className={style.moviesListCardContainer}>
            <div className={style.Tv}>
                <h1>Popular TV shows</h1>
                <div className={style.slider}>
                    <div className={style.card}></div>
                    <div className={style.card}></div>
                    <div className={style.card}></div>
                </div>
            </div>

            <div  className={style.Movies}>
                <h1>Popular Movies</h1>
                <div className={style.slider}>
                    <div className={style.card}></div>
                    <div className={style.card}></div>
                    <div className={style.card}></div>
                </div>
            </div>
        </div>
    );
};