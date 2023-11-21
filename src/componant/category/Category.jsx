import "./Category.css"

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import {getcategory} from "../../redux/apicalls/productapi"

const Category = () => {
   const dispatch= useDispatch()
  const{categories}= useSelector(state=>state.product)

  useEffect(()=>{
    dispatch(getcategory())
  },[])
    return ( 
<div className="category">
    {categories && categories.map((d)=>
    <div className="category-item">
    <img src={d.image} alt={d.title}/>
    <b className="category-title">
        {d.title}
    </b>

    </div>
    )}
</div>
     );
}
 
export default Category;