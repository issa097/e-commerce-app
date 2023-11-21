import { useParams } from "react-router-dom";

import Rating from "../../rating/Rating";
import { useEffect, useState } from "react";
import "./spicalofferpage.css";
import Discraption from "../discrebtion/Discraption";
import { useDispatch, useSelector } from "react-redux";

import { getoffersbyid } from "../../../redux/apicalls/productapi";
import Spinner from "../../spinner/Spinner";
import { addtocart } from "../../../redux/apicalls/cartapi";
const SpecialOffer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [imgindex, setimgindex] = useState(0);
  const { specialOffersId, loding } = useSelector((state) => state.product);
  console.log(specialOffersId);
  useEffect(() => {
    dispatch(getoffersbyid(id));
    window.scroll(0,0)
  }, []);
  const [qty, setqty] = useState("");
  // const product = specialOffersId.find((k) => k.id === parseInt(params.id));
  // const { images, title, reviews, rating, price, discount } = specialOffersId;
  // const finalprice = specialOffersId.price - (specialOffersId.discount * specialOffersId.price) / 100;
  if (loding) return <Spinner />;
  const addtocarthandler = () => {
    dispatch(
      addtocart({
        id: specialOffersId?.id,
        title: specialOffersId?.title,
        image: specialOffersId?.firstImage,
        price: specialOffersId?.price,
        quantity: qty,
      })
    );
  };
  return (
    <>
      <div className="special-Offer-page">
        <div className="special-Offer-page-img-wrapper">
          <img
            src={specialOffersId && specialOffersId.images[imgindex]}
            className="special-offer-page-img"
          />
          <div className="specail-offer-page-select-img">
            {specialOffersId &&
              specialOffersId.images.map((d, x) => (
                <img
                  onClick={() => setimgindex(x)}
                  key={x}
                  src={d}
                  className="select-img"
                />
              ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="specail-offer-page-title">
            {specialOffersId && specialOffersId.title}
          </h3>
          <Rating
            rating={specialOffersId && specialOffersId.rating}
            review={specialOffersId && specialOffersId.reviews}
          />
          <div className="special-offer-page-price">
            <b className="special-offer-price-item">
              {specialOffersId && specialOffersId.price}
            </b>
            <b className="special-offer-final-price-item">
              {specialOffersId &&
                specialOffersId.price -
                  (specialOffersId.discount * specialOffersId.price) / 100}
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
      <Discraption />
    </>
  );
};

export default SpecialOffer;
