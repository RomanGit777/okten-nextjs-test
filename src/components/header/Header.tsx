import './header.module.css'
import {UserInfo} from "@/components/userInfo/UserInfo";
import {SearchBar} from "@/components/searchbar/SearchBar";
export const Header = () => {
    return (
        <div className={"header"}>
            <h1>Logo</h1>
            <nav>
                <p>Home</p>
                <p>Genres</p>
                <SearchBar/>
            </nav>
            <UserInfo/>
        </div>
    );
};