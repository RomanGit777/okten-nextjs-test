import Image from "next/image";

interface PosterPreviewProps {
    title: string;
    posterPath: string | null;
    className?: string;
}
export const PosterPreview = ({posterPath, title, className}: PosterPreviewProps) => {
    const posterUrl = posterPath
    ?`https://image.tmdb.org/t/p/w500${posterPath}`
    : '/icons/bg.svg'
    return <Image
        src={posterUrl}
        alt={title}
        className={className ?? ""}
        width={300}
        height={450}
        unoptimized
    />;
};