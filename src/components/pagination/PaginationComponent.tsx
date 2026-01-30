'use client';
import style from "./style.module.css"
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {getPageWindow} from "@/helpers/getPageWindow";
import React from "react";
import {PageButton} from "@/components/pagination/PageButton";
interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
    maxVisible: number;
}
export const PaginationComponent = ({currentPage,totalPages, maxVisible = 5} : PaginationComponentProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const {start, end, pages} = React.useMemo(
        () => getPageWindow(currentPage, totalPages, maxVisible),
        [currentPage, totalPages, maxVisible]);

    if (!totalPages || totalPages <= 1) return null;

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        router.push(`?${params.toString()}`);
    }
    const goPrev = () => goToPage(currentPage - 1);
    const goNext = () => goToPage(currentPage + 1);

    return (
        <div className={style.pagination}>
            {/* Prev */}
            {currentPage > 1 && (<PageButton onClick={goPrev}>Prev</PageButton>)}
            {/* First page */}
            {start > 1 && (<PageButton onClick={() => goToPage(1)}>1</PageButton>)}
            {/* Leading ellipsis */}
            {start > 2 && (<PageButton onClick={() => goToPage(start - 1)}>...</PageButton>)}
            {/* Window pages */}
            {pages.map((p) => (<PageButton disabled={p === currentPage} active={p === currentPage} onClick={() => goToPage(p)} key={p}>{p}</PageButton>) )  }
            {/* Trailing ellipsis */}
            {end < totalPages - 1 && (<PageButton onClick={() => goToPage(end + 1)}>...</PageButton>)}
            {/* Last page */}
            {end < totalPages && (<PageButton onClick={() => goToPage(totalPages)}>{totalPages}</PageButton>)}
            {/* Next */}
            {currentPage < totalPages && (<PageButton onClick={goNext}>Next</PageButton>)}
        </div>
    );
};
