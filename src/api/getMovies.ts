import 'server-only';
import {ITvDetails} from "@/models/ITvDetails";
import {IPopularBaseTv} from "@/models/IPopularBaseTv";
import {IPopularBaseMovies} from "@/models/IPopularBaseMovies";
import {IMovieDetails} from "@/models/IMovieDetails";

export const getPopularTv = async (time_window : "day" | "week"): Promise<IPopularBaseTv> => {
    const res = await
        fetch(`https://api.themoviedb.org/3/trending/tv/${time_window}`,
            {headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                },
                next: {revalidate: 3600},
             cache: "force-cache"
            });
    if (!res.ok) throw new Error("Failed to fetch tv");
    return res.json();
}
export const getTvById = async (id: string): Promise<ITvDetails> => {
    const res = await
        fetch(`https://api.themoviedb.org/3/tv/${id}`,
            {headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                },
                next: {revalidate: 3600}
            });
    if (!res.ok) throw new Error(`Failed to fetch movie details for id=${id}`);
    return res.json();
}
export const getTvByGenre = async (genreId: string, page : string): Promise<IPopularBaseTv> => {
    const safePage = Math.min(Number(page), 500);
    const res = await
        fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&page=${safePage}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                },
                next: {revalidate: 3600},
                cache: "force-cache"
            }
        );
    if (!res.ok) throw new Error("Failed to fetch tv by genre");
    return res.json();
}

export const getPopularMovies = async (time_window: "day" | "week"): Promise<IPopularBaseMovies> => {
    const res = await
        fetch(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${process.env.API_KEY}`,
            {headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                },
                next: {revalidate: 3600}
            });
    if (!res.ok) throw new Error("Failed to fetch movies");
    return res.json();
}
export const getMoviesById = async (id: string): Promise<IMovieDetails> => {
    const res = await
        fetch(`https://api.themoviedb.org/3/movie/${id}`,
            {   headers: {
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                    },
                    next: {revalidate: 3600}
            });
    if (!res.ok) throw new Error(`Failed to fetch movie details for id=${id}`);
    return res.json();
}
export const getMoviesByGenre = async (genreId: string, page : string ): Promise<IPopularBaseMovies> => {
    const safePage = Math.min(Number(page), 500);
    const res = await
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${safePage}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                },
                    next: {revalidate: 3600}
            });
        if (!res.ok) throw new Error("Failed to fetch movies by genre");
     return res.json();
}

export const getMoviesBySearch = async (query: string, page : number = 1): Promise<IPopularBaseMovies> => {
    const safePage = Math.min(Number(page), 500);
    const res = await
        fetch(`https://api.themoviedb.org/3/search/movie?page=${safePage}&query=${encodeURIComponent(query)}`,
            {headers: {
                Authorization: `Bearer ${process.env.TMDB_API_KEY}`
                },
                next: {revalidate: 3600}
            });
    if (!res.ok) throw new Error("Failed to get movies by search");
    return res.json();
};

