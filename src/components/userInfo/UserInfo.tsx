import style from './userInfo.module.css'
export const UserInfo = () => {
    return (
        <div className={style.userInfo}>
                <img src="/imgs/avatar.png"
                     alt="avatar"/>
                <p>John Doe</p>
        </div>
    );
};