import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import instagram from "./icons/inst.png"
import vk from "./icons/vk.png"
import user from "./icons/user.png"

import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <nav className={styles.navigation}>
                        <a href="/" className={styles.header__logo}>Tiny Home</a>
                        <ul className={styles.header__list}>
                            <li><NavLink to="/">Главаня страница</NavLink></li>
                            <li><NavLink to="/rooms">Комнаты</NavLink></li>
                            <li><NavLink to="github.com/Abdylkadir/webexam2023">О нас</NavLink></li>
                            <li><NavLink to="">Обслуживание</NavLink></li>
                        </ul>
                        <div className={styles.header__social}>
                            <div className={styles.header__icon}><img src={instagram} alt="instagram" /></div>
                            <div className={styles.header__icon}><img src={vk} alt="vk" /></div>
                            <Tooltip title="search">
                                <Button className={styles.header__search} shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                        </div>
                        <div className={styles.header__registr}>
                            <div className={styles.header__user}>
                                <img src={user} alt="instagram" />
                            </div>
                            <p className={styles.header__name}>Ваня</p>
                            <a className={styles.header__log} href="">Выход</a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
