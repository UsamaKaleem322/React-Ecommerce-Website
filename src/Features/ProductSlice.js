import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase-config';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, {  }) => {
  const querySnapshot = await getDocs(collection(db, 'Products'));
  const allProducts = [];
  querySnapshot.forEach((doc) => {
    const productData = doc.data();
    allProducts.push(productData);
  });
  return allProducts;
});

export const productSlice = createSlice({
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  },
});

export const { singleProduct, GetAllProduct } = productSlice.actions;
export default productSlice.reducer;
