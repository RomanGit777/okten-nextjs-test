'use client';
import style from './styleButtons.module.css'
import {useRouter, useSearchParams} from "next/navigation";
interface PageButtonProps {
    page: number;
    children: React.ReactNode;
    disabled?: boolean;
    active?: boolean;
}
export const PageButton = ({disabled, page, children, active} : PageButtonProps) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = () => {
        if (disabled) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));

        router.push(`?${params.toString()}`);
    }

    return (
        <button
            type={"button"}
            disabled={disabled}
            onClick={handleClick}
            className={active ? style.pageButtonActive : style.pageButton}
        >
            {children}
        </button>
    );
};
