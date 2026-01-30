import style from './styleButtons.module.css'
interface PageButtonProps {
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    active?: boolean;
}
export const PageButton = ({disabled, onClick, children, active} : PageButtonProps) => {
    return (
        <button type={"button"} disabled={disabled} onClick={onClick} className={active ? style.pageButtonActive : style.pageButton}>
            {children}
        </button>
    );
};
