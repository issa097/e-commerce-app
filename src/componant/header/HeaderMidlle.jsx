import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchpro } from "../../redux/apicalls/productapi";

const HeaderMidlle = () => {
  // const [issa, setissa] = useState();
  // const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.product);
  // const display = products.filter((e) => e.title.includes(issa));

  // useEffect(() => {
  //   dispatch(fetchpro());
  // }, []);
 const {cartitems}= useSelector(state=>state.cart)

  return (
    <div className="middle-header">
      <div className="middle-header-search-box">
        <input
          // value={issa}
          // onChange={(e) => setissa(e.target.value)}
          type="search"
          placeholder="ماذا تريد"
        />
        <button className="search-box-btn">ابحث</button>
      </div>
      <Link to="/cart" className="middle-header-shopping-cart">
        سله التسوق
        <i className="bi bi-cart3"></i>
      
        {cartitems.length>0 && 
        <span className="cart-notification">{cartitems.length}</span>
      }
      </Link>
      {/* <div className="map">
        {display.map((d) => {
          return <h1>issa</h1>;
        })}
      </div> */}
    </div>
  );
};

export default HeaderMidlle;
