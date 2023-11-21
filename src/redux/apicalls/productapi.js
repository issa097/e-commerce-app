import { productActions } from "../slices/productslice";

export function fetchpro() {
  return async (dispatch) => {
    try {
      dispatch(productActions.setloding());

      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      dispatch(productActions.setproducts(data));
      dispatch(productActions.clearloding());
    } catch (error) {
      dispatch(productActions.clearloding());
      console.log(error);
    }
  };
}

export function getproductbyid(id) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setloding());
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      dispatch(productActions.setproduct(data));
      dispatch(productActions.clearloding());
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearloding());
    }
  };
}

// export function getproductbyids(id) {
//   return async (dispatch) => {
//     try {
//       dispatch(productActions.setloding());
//       const response = await fetch(`http://localhost:5000/product/${id}`);
//       const data = await response.json();
//       dispatch(productActions.setproduct(data));
//       dispatch(productActions.clearloding());
//     } catch (error) {
//       console.log(error);
//       dispatch(productActions.clearloding());
//     }
//   };
// }

export function getofferbyid() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/specialOffers");
      const data = await response.json();
      dispatch(productActions.setoffer(data));
    } catch (error) {
      console.log(error);
    }
  };
}


export function getoffersbyid(id) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setloding());

      const response = await fetch(`http://localhost:5000/specialOffers/${id}`);
      const data = await response.json();
      dispatch(productActions.setoffer2(data));
      dispatch(productActions.clearloding());
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearloding());
    }
  };
}

export function getcategory() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/categories");
      const data = await response.json();
      dispatch(productActions.setcategory(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function getbrands() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/brands");
      const data = await response.json();
      dispatch(productActions.setbrands(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function getbrands1() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/brands1");
      const data = await response.json();
      dispatch(productActions.setbrands1(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function getbrands2() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/brands2");
      const data = await response.json();
      dispatch(productActions.setbrands2(data));
    } catch (error) {
      console.log(error);
    }
  };
}
export function getbrands3() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/brands3");
      const data = await response.json();
      dispatch(productActions.setbrands3(data));
    } catch (error) {
      console.log(error);
    }
  };
}
