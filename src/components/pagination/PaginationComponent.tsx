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
        router.push(`${params.toString()}`);
    }
    return (
        <div className={style.pagination}>
            {Array.from({length: totalPages}, (_, i) => (
                <button
                type={"button"}
                key={i}
                onClick={() => goToPage(i + 1)}
                className={i + 1 === currentPage ? style.pageButtonActive : style.pageButton}
                >
                    {i + 1}
                </button>
            ) )  }
        </div>
    );
};
