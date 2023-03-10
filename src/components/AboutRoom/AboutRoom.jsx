import FeedBack from "@components/FeedBack"
import { Button } from 'antd';
import img1 from "@components/AboutRoom/image/room1.jpg"
import img2 from "@components/AboutRoom/image/room2.jpg"
import img3 from "@components/AboutRoom/image/room3.jpg"
import img4 from "@components/AboutRoom/image/room4.jpg"
import img5 from "@components/AboutRoom/image/room5.jpg"

const AboutRoom = () => {
    return (
        <section className="room">
            <div className="container">
                <div className="room__column">
                    <div className="room__row">
                        <div className="room__content">
                            <h1 className="room__title">Портлендский крошечный дом (Альберта искусств)</h1>
                            <span>(230 Отзывов)</span> <FeedBack />
                        </div>
                        <div className="room__btn">
                            <Button type="primary" ghost size='large'>
                                Показать больше фотографий
                            </Button>
                        </div>
                    </div>


                    <div className="row-sec">
                        <div className="row-sec__items">
                            <div className="row-sec__column">
                                <div className="row-sec__img"><img src={img2} alt="room-image1" /></div>
                                <div className="row-sec__img"><img src={img3} alt="room-image1" /></div>
                            </div>
                            <div className="row-sec__column">
                                <div className="row-sec__img"><img src={img4} alt="room-image1" /></div>
                                <div className="row-sec__img"><img src={img5} alt="room-image1" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutRoom;
