import {IPopularMovies} from "@/models/IPopularMovies";
import {MediaCardByGenre} from "@/components/MovieInfo/MediaCardByGenre/MediaCardByGenre";

interface MoviesBySearchListCardProps {
    movie: IPopularMovies;
}
export const MoviesBySearchListCard = ({movie} : MoviesBySearchListCardProps) => {
    const shortOverview = movie.overview ? movie.overview.slice(0,50) + "..." : "";
    console.log(movie);
    return <MediaCardByGenre type={"movie"} shortOverview={shortOverview} item={movie}/>;
};