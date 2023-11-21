import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartitems: localStorage.getItem("cartitem")
      ? JSON.parse(localStorage.getItem("cartitem"))
      : []
  },
  reducers: {
    additemtocart(state, action) {
      const newitem = action.payload;

      const isitemexistincart = state.cartitems.find(
        (cartitem) => cartitem.id === newitem.id
      );
      if (isitemexistincart) {
        state.cartitems = state.cartitems.map((cartitem) =>
          cartitem.id === newitem.id ? newitem : cartitem
        );
      } else {
        state.cartitems = [...state.cartitems, newitem];
      }
    },

    removeitemfromcart(state, action) {
      state.cartitems = state.cartitems.filter((b) => b.id !== action.payload);
    },
  },
});

const cartActions = cartslice.actions;
const cartreduser = cartslice.reducer;

export { cartActions, cartreduser };
