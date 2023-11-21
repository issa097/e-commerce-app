import { useState } from "react";
import "./Header.css"
import HeaderMidlle from "./HeaderMidlle";
import Navbar from "./Navbar";
import Topheader from "./Topheader";

const Header = () => {
   const [toggle,settoggle]= useState(false)

    return ( 
        <header className="header">
            <Topheader settoggle={settoggle}/>
                
            <HeaderMidlle/>
            <Navbar toggle={toggle} settoggle={settoggle}/>

        </header>
     );
}
 
export default Header ;