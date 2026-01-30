import {IPopularMovies} from "@/models/IPopularMovies";
import {MediaCard} from "@/components/MovieInfo/MediaCard/MediaCard";

interface MoviesBySearchListCardProps {
    movie: IPopularMovies;
}
export const MoviesBySearchListCard = ({movie} : MoviesBySearchListCardProps) => {
    const shortOverview = movie.overview ? movie.overview.slice(0,50) + "..." : "";
    return <MediaCard type={"movie"} shortOverview={shortOverview} item={movie}/>;
};