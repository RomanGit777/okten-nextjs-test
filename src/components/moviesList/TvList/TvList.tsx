import style from '../MoviesList/moviesList.module.css'
import {IPopularTv} from "@/models/IPopularTv";
import {SliderArrows} from "@/components/sliderArrows/SliderArrows";
import {SliderWrapper} from "@/components/sliderWrapper/SliderWrapper";
import {TvListCard} from "@/components/moviesListCard/TvListCard/TvListCard";
interface TvListProps{
    tv: IPopularTv[];
}
export const TvList = ({tv}: TvListProps) => {
    return (
        <div className={style.moviesListContainer}>
            <div>
                <h1 className={style.title}>Popular Tv Shows</h1>
                <SliderWrapper Arrows={SliderArrows}>
                        {tv.map(tv => <TvListCard tv={tv} key={tv.id}/>)}
                </SliderWrapper>
            </div>
        </div>
    );
};