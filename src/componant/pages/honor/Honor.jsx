import { useDispatch, useSelector } from "react-redux";
import { products } from "../../../data/products";
import Rating from "../../rating/Rating";
import Spinner from "../../spinner/Spinner";
import Honorfunction from "./Honorfunction";
import { useEffect } from "react";
import { fetchpro } from "../../../redux/apicalls/productapi";

const Honor = () => {
  const dispatch = useDispatch();
  const { loding, products } = useSelector((state) => state.product);
  const honor = products.filter((p) => p.isHonor === true);

  useEffect(() => {
    dispatch(fetchpro());
  }, []);
  if (loding) return <Spinner />;

  return (
    <div className="honor">
      {honor.map((d) => (
        <Honorfunction d={d} />
      ))}
    </div>
  );
};

export default Honor;
