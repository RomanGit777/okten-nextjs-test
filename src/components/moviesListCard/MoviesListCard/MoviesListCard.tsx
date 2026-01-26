import {IPopularMovies} from "@/models/IPopularMovies";
import {MovieInfo} from "@/components/movieInfo/MovieInfo/MovieInfo";

interface MoviesListCardProps {
    movie: IPopularMovies;
}
export const MoviesListCard = ({movie} : MoviesListCardProps) => {
    const shortOverview = movie.overview ? movie.overview.slice(0,50) + "..." : "";
    return <MovieInfo movie={movie} shortOverview={shortOverview}/>;
};