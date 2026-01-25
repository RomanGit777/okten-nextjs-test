import {MoviesListCardTv} from "@/components/moviesListCard/MoviesListCard";
import {IPopularTv} from "@/models/IPopularTv";
import style from './moviesList.module.css'
import {SliderArrows} from "@/components/sliderArrows/SliderArrows";
import {SliderWrapper} from "@/components/sliderWrapper/SliderWrapper";
interface MoviesListTvProps{
    tv: IPopularTv[];
}
export const MoviesList = ({tv}: MoviesListTvProps) => {
    return (
        <div className={style.moviesListContainer}>
            <div className={'tvShows'}>
                <h1 className={style.title}>Popular Tv Shows</h1>
                <SliderWrapper Arrows={SliderArrows}>
                        {tv.map(tv => <MoviesListCardTv tv={tv} key={tv.id}/>)}
                </SliderWrapper>
            </div>
        </div>
    );
};