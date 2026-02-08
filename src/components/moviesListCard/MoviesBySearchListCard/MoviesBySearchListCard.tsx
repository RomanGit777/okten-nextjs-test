import {IPopularMovies} from "@/models/IPopularMovies";
import {MediaCardByGenre} from "@/components/MovieInfo/MediaCardByGenre/MediaCardByGenre";

interface MoviesBySearchListCardProps {
    movie: IPopularMovies;
}
export const MoviesBySearchListCard = ({movie} : MoviesBySearchListCardProps) => {
    return <MediaCardByGenre type={"movie"} item={movie}/>;
};