import "./pagination.css"
const Pagination = ({pages ,currentpage ,setcurrentpage}) => {
    const generatedpages =[]
    for( let i=1; i <= pages ; i++){
        generatedpages.push(i)
    }
  
    return ( <div className="pagination">
      <button disabled={currentpage===1} onClick={()=>setcurrentpage(currentpage-1)} className="page previos">
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>
      {  generatedpages.map((d)=>
      <div onClick={()=>setcurrentpage(d)} key={d} className={currentpage===d ? "page active" : "page"}>{d}</div>
      )}
       <button disabled={pages}  onClick={()=>setcurrentpage(currentpage+1)} className="page next">
        <i className="bi bi-arrow-left"></i>
        التالي
      </button>

    </div> );
}
 
export default Pagination;