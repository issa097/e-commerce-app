import { useState } from "react";
import Rating from "../../rating/Rating";
import { addtocart } from "../../../redux/apicalls/cartapi";
import { useDispatch } from "react-redux";

const Honorfunction = ({ d }) => {
  const [images2, setimages2] = useState(d.image);
  const [qty, setQty] = useState("");
  const dispatch = useDispatch();
  const addtocarthandler = () => {
    dispatch(
      addtocart({
        id: d.id,
        title: d?.title,
        image: d?.image,
        price: d?.price,
        quantity: qty,
      })
    );
  };
  return (
    <div className="special-Offer-page">
      <div className="special-Offer-page-img-wrapper">
        <img
          src={images2}
          className="special-offer-page-img"
          onMouseEnter={() => setimages2(d.firstImage)}
          onMouseLeave={() => setimages2(d.image)}
        />
      </div>
      <div className="special-offer-page-info">
        <h3 className="specail-offer-page-title">{d.title}</h3>
        <Rating rating={d.rating} review={d.reviews} />
        <div className="special-offer-page-price">
          <b className="special-offer-price-item">{d.price}</b>
          <b className="special-offer-final-price-item">
            {d.price - (d.discount * d.price) / 100}
          </b>
        </div>
        <div className="special-offer-page-add-to-cart">
          <div> الكميه</div>
          <input
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            type="number"
            min="1"
            max="10"
          />
          <button onClick={addtocarthandler} className="add-to-cart-btn">
            اضافه الى سله التسوق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Honorfunction;
