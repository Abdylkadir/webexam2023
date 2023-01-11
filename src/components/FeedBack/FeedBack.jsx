
import Rating from '@mui/material/Rating';

const FeedBack = () => {
    return (
        <section className="feed-back">
            <div className="container">
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
            </div>
        </section>
    )

}

export default FeedBack;
