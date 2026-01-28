import {IPopularMovies} from "@/models/IPopularMovies";
import {MediaCardByGenre} from "@/components/MovieInfo/MediaCardByGenre/MediaCardByGenre";

interface MovieListCardProps {
    movie: IPopularMovies;
}
export const MovieByGenreListCard = ({movie} : MovieListCardProps) => {
    const shortOverview = movie.overview ? movie.overview.slice(0,50) + "..." : "";
    return <MediaCardByGenre item={movie} shortOverview={shortOverview} type={"movie"}/>;;
};