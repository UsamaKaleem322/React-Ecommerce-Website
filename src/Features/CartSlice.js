import { createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/Firebase-config';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
    loading: true,
  },
  reducers: {
    getCartProducts(state, action) {
      state.cartProducts = action.payload;
      state.loading = false;
    },
    incrementCartProduct : async (state, action) => {
      const product=action.payload;
      const docref = doc(db, 'CartProducts', product.id);
      await updateDoc(docref, {
        quantity: product.quantity + 1,
        totalPrice: product.totalPrice + product.price,
      });
      updateCarttotal(state, product.price);
    }
  },
});

export const cartProducts = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'CartProducts'));
    const allProducts = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      const productWithID = { id: doc.id, ...productData };
      allProducts.push(productWithID);
    });
    dispatch(getCartProducts(allProducts));
  } catch (error) {
    console.error('Error fetching products: ', error);
  }
};

const getCartProducts = (allProducts) => ({
  type: 'cart/getCartProducts',
  payload: allProducts
});


// const decrementProduct = (state, existingProduct, product) => {
//   existingProduct.quantity--;
//   existingProduct.totalPrice -= product.price;
//   updateCarttotal(state, -product.price);
// };

// const updateCarttotal = (state, productPrice) => {
//   state.totalQuantity += productPrice > 0 ? 1 : -1;
//   state.totalPrice += productPrice;
// };

export const { removeFromcart ,incrementCartProduct} = cartSlice.actions;
export default cartSlice.reducer;
