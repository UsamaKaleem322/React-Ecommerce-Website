import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase-config';

export const fetchProducts = () => async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, 'Products'));
    const allProducts = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      const productWithID = { id: doc.id, ...productData };
      allProducts.push(productWithID);
    });
    dispatch(getAllProduct(allProducts));
};

// Create separate actions for success and error
const getAllProduct = (allProducts) => ({
  type: 'products/getAllProduct',
  payload: allProducts,
});

// Use a reducer to handle the state
const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    product: JSON.parse(localStorage.getItem('Product')),
    loading:true
  },
  reducers: {
    singleProduct(state, action) {
      const product = state.allProducts.filter((product) => product.id === action.payload);
      localStorage.setItem('Product', JSON.stringify(product));
      state.product = product;
    },
    getAllProduct(state, action) {
      state.allProducts = action.payload;
      state.loading=false
    },
  },
});

export const { singleProduct } = productSlice.actions;
export default productSlice.reducer;
