import { configureStore } from "@reduxjs/toolkit"; 
import {productreduser}from "./slices/productslice"
import {cartreduser}from "./slices/cartslice"

const stor = configureStore({
    reducer:{

        product : productreduser,
        cart : cartreduser

    }

    
});

export default stor;