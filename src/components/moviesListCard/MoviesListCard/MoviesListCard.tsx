import {IPopularMovies} from "@/models/IPopularMovies";
import {MediaCard} from "@/components/MovieInfo/MediaCard";

interface MoviesListCardProps {
    movie: IPopularMovies;
}
export const MoviesListCard = ({movie} : MoviesListCardProps) => {
    const shortOverview = movie.overview ? movie.overview.slice(0,50) + "..." : "";
    return (
        <div style={{paddingBottom: "55px"}}>
            <MediaCard item={movie} shortOverview={shortOverview} type={'movie'}/>
        </div>)
    ;
};