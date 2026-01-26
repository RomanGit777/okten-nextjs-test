import {IPopularTv} from "@/models/IPopularTv";
import style from './moviesList.module.css'
import {SliderArrows} from "@/components/sliderArrows/SliderArrows";
import {SliderWrapper} from "@/components/sliderWrapper/SliderWrapper";
import {MoviesListCardTv} from "@/components/moviesListCard/TvMoviesListCard/MoviesListCardTv";
interface TvMoviesListTvProps{
    tv: IPopularTv[];
}
export const TvMoviesList = ({tv}: TvMoviesListTvProps) => {
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