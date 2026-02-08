import {IPopularMovies} from "@/models/IPopularMovies";
import {MediaCardByGenre} from "@/components/MovieInfo/MediaCardByGenre/MediaCardByGenre";

interface MovieListCardProps {
    movie: IPopularMovies;
}
export const MovieByGenreListCard = ({movie} : MovieListCardProps) => {
    return <MediaCardByGenre item={movie} type={"movie"}/>;;
};