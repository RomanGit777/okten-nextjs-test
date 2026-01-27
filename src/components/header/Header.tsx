import styles from './header.module.css'
import {UserInfo} from "@/components/userInfo/UserInfo";
import {SearchBar} from "@/components/searchbar/SearchBar";
import Link from "next/link";
import {GenresSection} from "@/components/genresSection/GenresSection";
export const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Logo</h1>
            <nav>
                <Link href={'/'} className={"homeBtn"}>Home</Link>
                <GenresSection/>
                <SearchBar/>
            </nav>
            <UserInfo/>
        </div>
    );
};