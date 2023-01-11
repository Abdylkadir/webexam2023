import styles from './HomePage.module.css';
import Offer from '@components/Offer'
import Welcome from '@components/Welcome'
import FindHome from "@components/FindHome"

const HomePage = () => {
    return (
        <main className="content">
            <Offer />
            <Welcome />
            <FindHome />
        </main >
    )
}


export default HomePage;
