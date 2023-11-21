import "./Brand.css";


import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getbrands, getbrands1, getbrands2, getbrands3 } from "../../redux/apicalls/productapi";
import Spinner from "../spinner/Spinner";

const BrandS = () => {
  const dispatch=useDispatch()
  
  const {brands }=useSelector(state=> state.product)
  const {brands1  }=useSelector(state=> state.product)
  const {brands2}=useSelector(state=> state.product)
  const {brands3}=useSelector(state=> state.product)
  


  useEffect(()=>{
    dispatch( getbrands3() )
    dispatch( getbrands2() )
    dispatch( getbrands1() )
    dispatch( getbrands() )
  },[])
 

  return (
    <div className="brand-wrapper">
      {brands2 && brands2.map((dw) => (
        <Link to="/samsung"className="brand" key={dw.id}>
          <img src={dw.image} />
        </Link>
      ))}

      {brands && brands.map((dw) => (
        <Link to="/honor" className="brand" key={dw.id}>
          <img src={dw.image} alt="" />
        </Link>
      ))}

      {brands1 && brands1.map((dw) => (
        <Link to="/apple" className="brand" key={dw.id}>
          <img src={dw.image} alt="" />
        </Link>
      ))}

      {brands3 && brands3.map((dw) => (
        <Link to="/huawei" className="brand" key={dw.id}>
          <img src={dw.image} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default BrandS;
