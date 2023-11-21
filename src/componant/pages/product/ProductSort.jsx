const ProductSort= ({setSort}) => {
    const handlerrSort =(e)=>{
        setSort(e.target.id)
    }

    return ( <div className="product-sort">
        <div className="form-group">
            <input onChange={handlerrSort} type="radio" name="filter" id="noSort" />
            <label htmlFor="noSort">بدون ترتيب</label>
        </div>
        <div className="form-group">
            <input onChange={handlerrSort} type="radio" name="filter" id="low" />
            <label htmlFor="low">من الاقل الى الاعلى</label>
        </div>
        <div className="form-group">
            <input onChange={handlerrSort} type="radio" name="filter" id="high" />
            <label htmlFor="high">منالاعلى الى الاقل</label>
        </div>
    </div> );
}
 
export default ProductSort;