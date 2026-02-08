import {useQuery} from "@tanstack/react-query";
import {IPopularMovies} from "@/models/IPopularMovies";

export const useSearchMovies = (query: string, limit = 5) => {
    const trimmedQuery = query.trim();

    return useQuery<IPopularMovies[]>({
        queryKey: ['search', trimmedQuery],
        queryFn: async () => {
            const res = await fetch(`/api/search?query=${encodeURIComponent(trimmedQuery)}&limit=${limit}`);
            return res.json();
        },
        enabled: trimmedQuery.length > 0,
        staleTime: 1000 * 60 * 5
    });
}
