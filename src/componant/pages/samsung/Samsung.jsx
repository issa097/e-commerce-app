import "./samsung.css";
import { products } from "../../../data/products";
import Sam from "./Samsungfunction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchpro } from "../../../redux/apicalls/productapi";
import Spinner from "../../spinner/Spinner";

const Samsung = () => {
  const dispatch = useDispatch();
  const { products, loding } = useSelector((state) => state.product);
  const phoness = products.filter((p) => p.isSam === true);
  useEffect(() => {
    dispatch(fetchpro());
  }, []);
  if (loding) return <Spinner />;
  return (
    <div className="samsung">
      {phoness.map((d) => (
        <Sam d={d} />
      ))}
    </div>
  );
};

export default Samsung;
