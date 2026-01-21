
interface PosterPreviewProps {
    title: string;
    posterPath: string;
    className?: string;
}
export const PosterPreview = async ({posterPath, title, className}: PosterPreviewProps) => {
    const posterUrl = posterPath
    ?`https://image.tmdb.org/t/p/w500${posterPath}`
    : '/icons/bg.svg'
    return <img src={posterUrl}
                alt={title} className={className}/>;
};