import 'server-only';
import {ITvDetails} from "@/models/ITvDetails";
import {IPopularBaseTv} from "@/models/IPopularBaseTv";

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


