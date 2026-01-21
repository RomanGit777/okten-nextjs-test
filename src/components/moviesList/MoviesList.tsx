import {MoviesListCard} from "@/components/moviesListCard/MoviesListCard";
import {IPopularTv} from "@/models/IPopularTv";
import style from './moviesList.module.css'
import {SliderArrows} from "@/components/sliderArrows/SliderArrows";
import {SliderWrapper} from "@/components/sliderWrapper/SliderWrapper";
interface MoviesListProps{
    tv: IPopularTv[]
}
export const MoviesList = ({tv}: MoviesListProps) => {
    return (
        <div className={style.moviesListContainer}>
            <h1 className={style.title}>Popular Tv Shows</h1>
            <SliderWrapper Arrows={SliderArrows}>
                <div className={style.slider}>
                    {tv.map(tv => <MoviesListCard tv={tv} key={tv.id}/>)}
                </div>
            </SliderWrapper>
        </div>
    );
};