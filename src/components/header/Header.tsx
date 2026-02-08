import styles from './header.module.css'
import {UserInfo} from "@/components/userInfo/UserInfo";
import {SearchBar} from "@/components/searchbar/SearchBar";
import Link from "next/link";
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