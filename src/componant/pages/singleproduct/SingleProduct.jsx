import { useParams } from "react-router-dom";
import Spinner from "../../spinner/Spinner";

import "./singleproducts.css";
import Rating from "./../../rating/Rating";
import Discraption from "../discrebtion/Discraption";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductbyid,  } from "../../../redux/apicalls/productapi";
import { addtocart } from "../../../redux/apicalls/cartapi";

const SingleproductId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [qty,setqty]= useState("");
  const { productId, loding } = useSelector((state) => state.product);

  // fetch

  useEffect(() => {
    dispatch(getproductbyid(id));
    window.scroll(0,0)
  }, [id]);

  // add to cart 
  const addtocarthandler =() =>{
    dispatch(addtocart({
      id:  productId?.id ,
      title: productId?.title,
      image:  productId?.image,
      price:  productId?.price,
     quantity: qty
    })
    )
  };

  if (loding) return <Spinner />;

  return (
    <div className="Singleproduct">
      <div className="product-wrappe">
        <div className="product-image-wrapper">
          <img src={productId && productId.image} />
        </div>
        <div className="product-info">
          <h1 className="prodct-title">
            {productId && productId.title}
          </h1>
          <Rating
            rating={productId && productId.rating}
            review={productId && productId.reviews}
          />
          <div className="product-price">
            {productId&&productId.price}
            
            <div/>

      
           
            <div className="product-add-to-cart">
              <div>الكميه</div>
              <input value={qty} onChange={e=>setqty(e.target.value)} type="number" min="1" max="10" />
              <button onClick={addtocarthandler} className="add-to-cart-btnn">اضافه الى سله التسوق</button>
            </div>
          </div>
        </div>
      </div>
      <Discraption />
    </div>
  );
};


export default SingleproductId;
