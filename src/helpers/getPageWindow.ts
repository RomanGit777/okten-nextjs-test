export function getPageWindow(currentPage: number, totalPages: number, maxVisible: number) {

    const half = Math.floor(maxVisible / 2);

    let start = currentPage - half;

    let end = currentPage + half;

    if (start < 1) {
        start = 1;
        end = Math.min(maxVisible, totalPages);
    }

    if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, totalPages - maxVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return {start, end, pages};
}