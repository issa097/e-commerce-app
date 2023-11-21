import { useState } from "react";
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";

const Offer = ({ d }) => {
  const [image2, setimage2] = useState(d.firstImage);

  return (
    <div className="offer">
      <div className="offer-image-wrapper">
        <img
          onMouseEnter={() => setimage2(d.secondImage)}
          onMouseLeave={() => setimage2(d.firstImage)}
          className="offer-img"
          src={image2}
          alt={d.title}
        />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{d.title}</h5>
        <Rating rating={d.rating} review={d.reviews} />
        <div className="offer-price">
          <b className="offer-price-item">${d.price}</b>
          <b className="offer-price-item1">
            ${d.price - (d.discount * d.price) / 100}
          </b>
        </div>
        <Link to={`/spical-offer/${d.id}`} className="offer-see-more">
          شاهد المزيد
        </Link>
        <div className="offer-disco">خصم {d.discount}%</div>
      </div>
    </div>
  );
};

export default Offer;
