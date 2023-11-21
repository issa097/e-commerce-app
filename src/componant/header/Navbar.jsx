import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({toggle,settoggle}) => {

    return ( 
       
         <nav style={{right: toggle && "0"}} className="navbar">
            <div className="navbar-close-icon">
                <i onClick={()=> settoggle(false)} className="bi bi-x-lg"></i>
            </div>
            <ul className="navbar-links">
                <Link to="/" onClick={()=> settoggle(false)} className="navbar-link">الصفحه الرئيسيه</Link>
                <Link to="products" onClick={()=> settoggle(false)} className="navbar-link">الالكترونيات و الموبايلات</Link>
                <Link  onClick={()=> settoggle(false)} className="navbar-link">المنزل و المطبخ</Link>
                <li onClick={()=> settoggle(false)} className="navbar-link">رجاليه</li>
                <li onClick={()=> settoggle(false)} className="navbar-link">نسائيه</li>
            </ul>
        </nav>
       
      

     );
}
 
export default Navbar ;