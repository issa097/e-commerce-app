const Topheader = ({settoggle}) => {
    return ( 
        <div className="top-header">
        <div onClick={()=> settoggle(true)} className="top-header-menu">
                    <i className="bi bi-list"></i>
                </div>
                <div className="top-header-logo">
                    <i className="bi bi-basket2"></i>
                     الاردن ستور
                </div>
                <div className="top-header-text">اهلا و سهلا بكم</div>
                <div className="top-header-phone">
                    132-123-1333
                    <i className="bi bi-telephone"></i>
                </div>
            </div>
     );
}
 
export default Topheader;