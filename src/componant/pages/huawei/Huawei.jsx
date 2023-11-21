import { useDispatch, useSelector } from "react-redux";
import Huaweifunction from "../huawei/Huaweifunction";

import { useEffect } from "react";
import { fetchpro } from "../../../redux/apicalls/productapi";
import Spinner from "../../spinner/Spinner";

const Huawei = () => {
  const dispatch = useDispatch();
  const { products, loding } = useSelector((state) => state.product);
  const huawei = products.filter((p) => p.ishuawei === true);

  useEffect(() => {
    dispatch(fetchpro());
  }, []);

  if (loding) return <Spinner />;

  return (
    <div className="huawei">
      {huawei.map((d) => (
        <Huaweifunction d={d} />
      ))}
    </div>
  );
};

export default Huawei;
