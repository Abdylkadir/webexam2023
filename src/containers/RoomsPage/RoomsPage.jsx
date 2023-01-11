import styles from './RoomsPage.module.css';

const RoomsPage = () => {
    return (
        <form className='serch-form'>
            <input type="text" name="text" className="search" />
            <input type="submit" name="submit" className="submit-seach" value="Search" />
        </form>
    )
}


export default RoomsPage;
