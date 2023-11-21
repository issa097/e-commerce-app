import ProductItem from "./ProductItem";

const productList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((d) => (
        <ProductItem d={d} />
      ))}
    </div>
  );
};

export default productList;
