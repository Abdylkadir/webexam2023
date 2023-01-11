import { Button, Space } from 'antd';

console.log(Button)

const FindHome = () => {
    return (
        <section className='find-home'>
            <div className="container">
                <div className="find-home__bg"></div>
                <div className="find-home__body">
                    <div className="find-home__content">
                        <h2 className="find-home__title">Найти свой комнату</h2>
                        <p className="find-home__text">От парков и дорожек до живых развлечений, вы будете иметь множество удобств, чтобы сделать ваш опыт незабываемым.</p>
                    </div>
                    <form className="find-home__form form" action='#' method='post'>
                        <fieldset className='form__date'>
                            <p>Дата заезда</p>
                            <input type="date" />
                            <p>Дата выезда</p>
                            <input type="date" />
                        </fieldset>
                        <fieldset className='form__amount'>
                            <p>Взрослые</p>
                            <select className='form__adults' id='adults'>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                            <p>Дети</p>
                            <select className='form__children'>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </fieldset>
                        <Button block target='google.com' size='large'>Найти</Button>
                    </form>
                </div>
            </div>
        </section >

    )
}



export default FindHome;
