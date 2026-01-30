'use client';
import style from "./style.module.css"
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
}
export const PaginationComponent = ({currentPage,totalPages} : PaginationComponentProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        router.push(`?${params.toString()}`);
    }

    const maxVisibile = 5;
    let start = Math.max(1, currentPage - 2)
    let end = Math.min(totalPages, start + maxVisibile - 1);

    if (end - start < maxVisibile - 1) {
        start = Math.max(1, end - maxVisibile + 1);
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return (
        <div className={style.pagination}>

            {start > 1 && (
                <button
                    type={"button"}
                    onClick={() => goToPage(currentPage - 1)}
                    className={style.pageButton}>
                    Prev
                </button>
            )}
            {start > 1 && (
                <button
                    type={"button"}
                    onClick={() => goToPage(1)}
                    className={style.pageButton}>
                            1
                </button>
            )
            }
            {start > 1 && (
                <button
                    type={"button"}
                    onClick={() => goToPage(1)}
                    className={style.pageButton}>
                    ...
                </button>
            )}
            {pages.map((p) => (
                <button
                type={"button"}
                key={p}
                onClick={() => goToPage(p)}
                className={p === currentPage ? style.pageButtonActive : style.pageButton}
                >
                    {p}
                </button>
            ) )  }
            {end < totalPages && (
                <button
                    type={"button"}
                    onClick={() => goToPage(totalPages)}
                    className={style.pageButton}>
                        ...
                </button>
            )}
            {end < totalPages && (
                <button
                    type={"button"}
                    onClick={() => goToPage(totalPages)}
                    className={style.pageButton}>
                    {totalPages}
                </button>
            )}
            {currentPage < totalPages && (
                <button
                    type={"button"}
                    onClick={() => goToPage(currentPage + 1)}
                    className={style.pageButton}>
                    Next
                </button>
            )}
        </div>
    );
};
