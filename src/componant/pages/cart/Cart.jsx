import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { removecart } from "../../../redux/apicalls/cartapi";


// const cartitem = [
//   {
//     id: 1,
//     title: "اتش بی الیت بوك الجیل الثانی",
//     image: "/images/products/laptops/l1.jpg",
//     price: 750,
//     quantity: 2,
//   },
//   {
//     id: 2,
//     title: "اتش بی الیت بوك الجیل الثانی",
//     image: "/images/products/laptops/l2.jpg",
//     price: 750,
//     quantity: 3,
//   },
// ];

const Cart = () => {
  const dispatch=useDispatch()
 const {cartitems}= useSelector(state=>state.cart)
 
  return (
    <div className="cart">
      <h1 className="cart-title">سله التسوق</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartitems.map((d) => (
            <div className="cart-item" key={d.id}>
              <div className="cart-item-img-wrappr">
                <img src={d.image} className="cart-item-img" />
              </div>
              <div className="cart-item-info">
                <div className="cart-item-title">{d.title}</div>
                <div className="cart-item-quantity">
                  الكميه:
                  <span>{d.quantity}</span>
                </div>
                <div className="cart-item-price">
                  السعر:
                  <span>{d.price * d.quantity}</span>
                </div>
                <i onClick={ () =>  dispatch(removecart(d.id))} className="bi bi-trash cart-item-delete-icon "></i>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-text">
            <i className="bi bi-check-circle-fill"></i>
          <p>  جزء من طلبك مؤهل للشحن المجاني , قم بتحديد هذا الخيار عند الدفع
            التفاصيل</p>
          </div>
          <div className="cart-summary-total">
            المجموع:
            <span>
              {cartitems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}
            </span>
          </div>
          <button className="cart-summary-btn">
            تابع عمليه الشراء 
          </button>
        </div> 
      </div>
    </div>
  );
};

export default Cart;
