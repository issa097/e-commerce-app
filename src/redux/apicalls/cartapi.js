import { cartActions } from "../slices/cartslice";


// add to cart 
export function addtocart(object){
    return (dispatch,getState)=>{
        dispatch(cartActions.additemtocart(object))
        const{cart}=getState()
        localStorage.setItem("cartitem",JSON.stringify(cart.cartitems))
    }
}
// remove 
export function removecart(id){
    return (dispatch,getState)=>{
        dispatch(cartActions.removeitemfromcart(id))
        const{cart}=getState()

        localStorage.setItem("cartitem",JSON.stringify(cart.cartitems))

    }
}