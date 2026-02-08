import styles from './header.module.css'
import Link from "next/link";
import {SearchBar} from "@/components/SearchBar/SearchBar";
import {UserInfo} from "@/components/UserInfo/UserInfo";
export const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Logo</h1>
            <nav>
                <Link href={'/'} className={styles.homeBtn}>Home</Link>
                <Link href={'/genres/'}>Genres</Link>
                <SearchBar/>
            </nav>
            <UserInfo/>
        </header>
    );
};