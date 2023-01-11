import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import facebook from "./icons/facebook.png"
import instagram from "./icons/inst.png"
import vk from "./icons/vk.png"

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
                            <li><NavLink to="">О нас</NavLink></li>
                            <li><NavLink to="">Обслуживание</NavLink></li>
                        </ul>
                        <div className={styles.header__social}>
                            <div className={styles.header__icon}><img src={facebook} alt="facebook" /></div>
                            <div className={styles.header__icon}><img src={instagram} alt="instagram" /></div>
                            <div className={styles.header__icon}><img src={vk} alt="vk" /></div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
