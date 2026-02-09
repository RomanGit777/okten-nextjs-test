import {NextResponse} from "next/server";
import {getMoviesBySearch} from "@/api/movies/getMovies";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const query = searchParams.get('query') || "";
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? Number(limitParam) : 5;

    if (!query || !query.trim()) {
        return NextResponse.json([]);
    }

    const data = await getMoviesBySearch(query);
    const sliced = data.results.slice(0, limit);

    return NextResponse.json(sliced);
}