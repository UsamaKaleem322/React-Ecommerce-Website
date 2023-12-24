import { createSlice } from '@reduxjs/toolkit';
import { db } from '../Firebase/Firebase-config';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
    quantity: 0,
    totalQuantity: 0,
    totalPrice: 0,
    loading:true,
  },
  reducers: {
    
    setCartProducts(state, action) {
      state.cartProducts = action.payload;
      state.loading=false;
    },
    addtocart: (state, action) => {
      const product = action.payload;
        addnew(state, state.cartProducts, product);
    },
    removeFromcart: (state, action) =>{
      const product = action.payload;
      removeProduct(state, state.cartProducts, product);
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
    dispatch(setCartProducts(allProducts));
  } catch (error) {
    console.error('Error fetching products: ', error);
  }
};
const setCartProducts = (allProducts) => ({
  type: 'cart/setCartProducts',
  payload: allProducts
});

const addnew = async (state, cart, product) => {
  await addDoc(collection(db, "CartProducts"), {
    name: product.name,
    image: product.image,
    price: product.price,
    desc: product.desc,
    quantity: 1,
    totalPrice: product.price
  });
  window.location.reload()
};

const removeProduct =  async(state, cart, product) => {
  const docRef = doc(db, 'CartProducts', product.id);
  await deleteDoc(docRef);
  window.location.reload()
};

// const incrementProduct = async (state, existingProduct, product) => {

//   const { name, quantity, totalPrice, price } = existingProduct;
//   const docref = doc(db, 'CartProducts', name);
//   await updateDoc(docref, {
//     quantity: quantity + 1,
//     totalPrice: totalPrice + price,
//   });
//   updateCarttotal(state, product.price);
// };

// const decrementProduct = (state, existingProduct, product) => {
  //   existingProduct.quantity--;
  //   existingProduct.totalPrice -= product.price;
  //   updateCarttotal(state, -product.price);
// };

// const updateCarttotal = (state, productPrice) => {
//   state.totalQuantity += productPrice > 0 ? 1 : -1;
//   state.totalPrice += productPrice;
// };

export const {  addtocart, removeFromcart } = cartSlice.actions;
export default cartSlice.reducer;
