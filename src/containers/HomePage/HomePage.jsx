import styles from './HomePage.module.css';
import Offer from '@components/Offer'
import Welcome from '@components/Welcome'
import FindHome from "@components/FindHome"
import Footer from "@components/Footer"

const HomePage = () => {
    return (
        <main className="content">
            <Offer />
            <Welcome />
            <FindHome />
            <Footer />
        </main >
    )
}


export default HomePage;
