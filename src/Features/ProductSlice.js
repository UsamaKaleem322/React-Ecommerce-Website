import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase-config';

export const fetchProducts = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Products'));
    const allProducts = [];
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      const productWithID = { id: doc.id, ...productData };
      allProducts.push(productWithID);
    });
    dispatch(getAllProduct(allProducts));
  } catch (error) {
    console.error('Error fetching products: ', error);
  }
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
  },
  reducers: {
    singleProduct(state, action) {
      const product = state.allProducts.filter((product) => product.name === action.payload);
      localStorage.setItem('Product', JSON.stringify(product));
      state.product = product;
    },
    getAllProduct(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const { singleProduct } = productSlice.actions;
export default productSlice.reducer;
