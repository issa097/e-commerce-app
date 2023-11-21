import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";

const ProductItem = ({ d }) => {
  return (
    <Link to={`/products/${d.id}`} key={d.id} className="product-item">
      <img src={d.image} className="products-item-img" />
      <h3 className="products-item-title">{d.title}</h3>
      <Rating rating={d.rating} review={d.review} />
      <div className="products-item-price">${d.price}</div>
    </Link>
  );
};

export default ProductItem;
