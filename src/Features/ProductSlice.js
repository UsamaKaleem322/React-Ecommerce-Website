import {createSlice} from '@reduxjs/toolkit';
import {storedata} from '../Data/Dummydata';

export const productSlice=createSlice({
  name:'products',
  initialState:{
    allProducts:storedata,
    product:JSON.parse(localStorage.getItem('Product'))
  },
  reducers:{
    singleProduct(state,action){
      const product=storedata.filter(product=>product.id==action.payload);
      localStorage.setItem('Product',JSON.stringify(product))
      state.product=product;
    }
  }
})

export const {singleProduct}=productSlice.actions;
export default productSlice.reducer;