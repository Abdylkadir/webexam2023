import { useLocation } from 'react-router-dom'
import img from './image/notFound.png'


const NotFoundPage = () => {
    let location = useLocation()


    return (
        <div className='not-found'>
            <img className='not-found__img' src={img} alt="Not Found Page" />
            <p className='not-found__text'>Не найдена страница для такого адреса:<u>{location.pathname}</u></p>
        </div>
    )
}


export default NotFoundPage;
