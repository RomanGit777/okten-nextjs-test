import style from "./style.module.css"
import {getPageWindow} from "@/helpers/getPageWindow";
import React from "react";
import {PageButton} from "@/components/pagination/PageButton";
interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
    maxVisible: number;
}
export const PaginationComponent = <T,>({currentPage, maxVisible = 5, totalPages} : PaginationComponentProps) => {

    const {start, end, pages} = React.useMemo(
        () => getPageWindow(currentPage, totalPages, maxVisible),
        [currentPage, totalPages, maxVisible]);

    if (!totalPages || totalPages <= 1) return null;


    return (
        <div className={style.pagination}>
            {/* Prev */}
            {currentPage > 1 && (
                <PageButton page={currentPage - 1}>Prev</PageButton>
                )}

            {/* First page */}
            {start > 1 && (
                <PageButton page={1}>1</PageButton>
                )}

            {/* Leading ellipsis */}
            {start > 2 && (
                <PageButton page={start - 1}>...</PageButton>
                )}

            {/* Window pages */}
            {pages.map((p) => (
                <PageButton key={p} page={p} active={p === currentPage} disabled={p === currentPage} >
                    {p}
                </PageButton>
                ))}

            {/* Trailing ellipsis */}
            {end < totalPages - 1 && (
                <PageButton page={end + 1}>...</PageButton>
                )}

            {/* Last page */}
            {end < totalPages && (
                <PageButton page={totalPages}>{totalPages}</PageButton>
                )}

            {/* Next */}
            {currentPage < totalPages && (
                <PageButton page={currentPage + 1}>Next</PageButton>
                )}
        </div>
    );
};
