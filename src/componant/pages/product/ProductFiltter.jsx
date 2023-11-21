const ProductFiltter = ({setFilter,filterItem}) => {
    const handeletfilter=(e)=>{
        setFilter(e.target.id)
    }
  return (
    <div className="product-filter">
      <div className="form-group">
        <input value={filterItem} onChange={handeletfilter} type="radio" name="filter" id="all" />
        <label htmlFor="all">بدون فلتر</label>
      </div>
      <div className="form-group">
        <input value={filterItem} onChange={handeletfilter} type="radio" name="filter" id="laptop" />
        <label htmlFor="laptop">لابتوب</label>
      </div>
      <div className="form-group">
        <input value={filterItem} onChange={handeletfilter} type="radio" name="filter" id="phone" />
        <label htmlFor="phone">هاتف</label>
      </div>
    </div>
  );
};

export default ProductFiltter;
