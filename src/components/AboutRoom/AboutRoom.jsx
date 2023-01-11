import FeedBack from "@components/FeedBack"
import img1 from "@components/AboutRoom/image/room1.jpg"
import img2 from "@components/AboutRoom/image/room2.jpg"
import img3 from "@components/AboutRoom/image/room3.jpg"
import img4 from "@components/AboutRoom/image/room4.jpg"
import img5 from "@components/AboutRoom/image/room5.jpg"

const AboutRoom = () => {
    return (
        <section className="room">
            <div className="container">
                <div className="room__row">
                    <div className="room__column">
                        <div className="room__content">
                            <h1>Портлендский крошечный дом (Альберта искусств)</h1>
                            <span>(230 Ratings)</span> <FeedBack />
                        </div>
                        <div className="room__img"><img src={img1} alt="room-image1" /></div>
                    </div>
                    <div className="room__column">
                        <div className="room__images">
                            <div className="room__img"><img src={img2} alt="room-image2" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutRoom;
