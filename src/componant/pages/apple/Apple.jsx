import { useDispatch, useSelector } from "react-redux";
import Applefunction from "./Applefunction";

import { useEffect } from "react";
import { fetchpro } from "../../../redux/apicalls/productapi";
import Spinner from "../../spinner/Spinner";

const Apple = () => {
  const dispatch = useDispatch();
  const { products, loding } = useSelector((state) => state.product);
  const apple = products.filter((p) => p.isApple === true);

  useEffect(() => {
    dispatch(fetchpro());
  },[]);
  if (loding) return <Spinner />;
  return (
    <div className="apple">
      {apple.map((d) => (
        <Applefunction d={d} />
      ))}
    </div>
  );
};

export default Apple;
