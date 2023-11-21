import ProductFiltter from "./ProductFiltter";
import ProductSort from "./ProductSort";

const Productsidbar = ({setFilter,filterItem,sortItem,setSort}) => {
  return (
    <div className="productsaidebar">
      <div className="sidebar-item">
        <div className="divs">
          <h4 className="sidbar-title"> الترتيب حسب السلع</h4>{" "}
          <ProductFiltter setFilter={setFilter} filterItem={filterItem} />
        </div>

        <div className="divs">
          <h4 className="sidbar-title"> الترتيب حسب السعر</h4>
          <ProductSort sortItem={sortItem} setSort={setSort} />
        </div>
      </div>
    </div>
  );
};

export default Productsidbar;
