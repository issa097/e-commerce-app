import { useEffect, useState } from "react";
import Rating from "../../rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import product from "./../product/Product";
import Spinner from "../../spinner/Spinner";
import { gethonor } from "../../../redux/apicalls/productapi";
import Honor from "./Honor";
import { addtocart } from "../../../redux/apicalls/cartapi";

const Honorfunction = ({ d }) => {
  const dispatch = useDispatch();
  const [qty, setqty] = useState("");
  const [images2, setimages2] = useState(d.image);
  const { loding } = useSelector((state) => state.product);
  if (loding) return <Spinner />;
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
            onChange={(e) => setqty(e.target.value)}
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
