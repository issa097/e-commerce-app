import "./SpecialOffers.css";

import Offer from "./Offer";
import { useDispatch, useSelector } from "react-redux";
import { getofferbyid } from "../../redux/apicalls/productapi";
import { useEffect } from "react";

const SpecialOffers = () => {
  const dispatch = useDispatch();
  const { specialOffers } = useSelector((state) => state.product);

  // fetch

  useEffect(() => {
    dispatch(getofferbyid());
  }, []);

  return (
    <div className="specialoffer">
      <h1 className="special-offers-title">
        عروض كبيره لليوم
        <span className="special-offer-icon-wrapper">
          <i className="bi bi-stopwatch"></i> ل 24 ساعه
        </span>
      </h1>
      <div className="special-offer-wrapper">
        {specialOffers && specialOffers.map((d) => <Offer d={d} />)}
      </div>
    </div>
  );
};

export default SpecialOffers;
