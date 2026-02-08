import style from './userInfo.module.css'
import Image from "next/image";
export const UserInfo = () => {
    return (
        <div className={style.userInfo}>
                <Image
                    src="/imgs/avatar.png"
                    alt="avatar"
                    width={50}
                    height={44}
                />
                <p>John Doe</p>
        </div>
    );
};