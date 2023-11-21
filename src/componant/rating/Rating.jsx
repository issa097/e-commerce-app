import "./Rating.css";

const Rating = ({ rating, review }) => {
  return (
    <div className="rating-wrapper">
      <div className="rating">
        {rating} <i className="bi bi-star-fill"></i>
      </div>
      <span className="review">{review} تقييم</span>
    </div>
  );
};

export default Rating;
