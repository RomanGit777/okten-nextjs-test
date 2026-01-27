import styles from './header.module.css'
import {UserInfo} from "@/components/userInfo/UserInfo";
import {SearchBar} from "@/components/searchbar/SearchBar";
import Link from "next/link";
export const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Logo</h1>
            <nav>
                <Link href={'/'} className={"homeBtn"}>Home</Link>
                <Link href={"#genres"}>Genres</Link>
                <SearchBar/>
            </nav>
            <UserInfo/>
        </div>
    );
};