import img from './img/welcome.jpg'
import arrow from './img/arrow-right.png'

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome__body">
                    <div className="welcome__img">
                        <img className='welcome__img' src={img} alt="Not Found Page" />
                    </div>
                    <div className="welcome__offer">
                        <div className="welcome__content">
                            <div className="welcome__mark">1-Hello, there</div>
                            <h2 className="welcome__title">Добро пожаловать в мир отдыха. Расслабьтесь и получайте удовольствие</h2>
                            <p className="welcome__text">Переход испытал всплеск популярности в 1960-х годах, когда Letraset использовал его на своих сухих трансферных листах, и снова в течение 90-х годов, как настольные издатели поставляли текст вместе со своим программным обеспечением. Сегодня его можно увидеть повсюду в Интернете, на шаблонах, веб-сайтах и в дизайне акций.</p>
                            <a href="" className="welcome__btn">Подробнее </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Welcome;
