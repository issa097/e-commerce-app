import { createSlice } from "@reduxjs/toolkit"; 


const productslice =createSlice({
    name : "product",
    initialState: {
        products:[],
        productId:null,
        specialOffers:null,
        categories:null,
        brands:null,
        brands1:null,
        brands2:null,
        brands3:null,
        specialOffersId:null,
        loding:false,
      
        
  
      
    },
    reducers:{

        setproducts(state,action){
            state.products=action.payload
        },
        setproduct(state,action){
            state.productId=action.payload
        },
        setoffer(state,action){
            state.specialOffers=action.payload
           

        },
        setoffer2(state,action){
            
            state.specialOffersId=action.payload

        },
      
        setcategory(state,action){
            state.categories=action.payload
        },
        setbrands(state,action){
            state.brands=action.payload
        },
        setbrands1(state,action){
            state.brands1=action.payload
        },
        setbrands2(state,action){
            state.brands2=action.payload
        },
        setbrands3(state,action){
            state.brands3=action.payload
        },
        setloding(state){
            state.loding=true;
        },
        clearloding(state){
            state.loding=false;
        },
      
      
    }
});
const productActions = productslice.actions;
const productreduser = productslice.reducer;

export {productActions ,productreduser}
