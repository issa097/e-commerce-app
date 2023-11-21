import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import Producsidbar from "./Productsidbar";
import { useEffect, useState } from "react";
import { fetchpro } from "../../../redux/apicalls/productapi";
import "./product.css";
import Pagination from "../../Pagination/Pagination";
const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log(products);

  useEffect(() => {
    dispatch(fetchpro());
  }, []);
  // filter
  const [filterItem, setFilter] = useState("all");
  const filters = products.filter((d) =>
    filterItem === "laptop"
      ? d.isLaptop === true
      : filterItem === "phone"
      ? d.isLaptop === false
      : d
  );
  // sort
  const [sortItem, setSort] = useState("select");
  const sorteditem =
    sortItem === "low"
      ? filters.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filters.sort((a, b) => b.price - a.price)
      : filters.sort((a, b) => (a.title - b.title ? 1 : -1));
// pagination 
const [currentpage, setcurrentpage] = useState(1);

const product_per_page = 3
const pages= Math.ceil(filters.length / product_per_page)
const start =(currentpage - 1 )* product_per_page; 
const end = currentpage * product_per_page; 
const finsh= filters.slice(start,end)
 

  return (
    <>
    <div className="products">
      <Producsidbar
        filterItem={filterItem}
        setFilter={setFilter}
        sortItem={sortItem}
        setSort={setSort}
      />
      <ProductList products={finsh} />
    </div>
    <Pagination pages={pages} currentpage={currentpage} setcurrentpage={setcurrentpage} />
    </>
  );
};

export default Product;
