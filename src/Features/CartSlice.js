import {createSlice} from '@reduxjs/toolkit';

export const cartSlice=createSlice({
  name:'cart',
  initialState:{
    cartProducts:[],
    quantity:0,
    totalQuantity:0,
    totalPrice:0
  },
  reducers:{
    addtocart:(state,action)=>{
        const product=action.payload;
        const existingProduct=state.cartProducts.find(item=>item.name===product.name)
        if(existingProduct){
          incrementProduct(state,existingProduct,product)
        }
        else{
          addnew(state,state.cartProducts,product)
        }
    },
    removeFromcart:(state,action)=>{
      const product=action.payload;
      const existingProduct=state.cartProducts.find(item=>item.name===product.name);
      if(existingProduct.quantity===1){
          removeProduct(state,state.cartProducts,product)
      }
      else{
         decrementProduct(state,existingProduct,product)
      }
    },
    clearCart:(state,action)=>{
      state.cartProducts=[];
      state.quantity=0;
      state.totalPrice=0;
      state.totalQuantity=0
    }
  }
});

const incrementProduct=(state,existingProduct,product)=>{
   existingProduct.quantity++;
   existingProduct.totalPrice+=product.price;
   updateCarttotal(state,product.price);
}
const addnew=(state,cart,product)=>{
 const newProduct={
    name:product.name,
    image:product.image,
    price:product.price,
    desc:product.desc,
    quantity:1,
    totalPrice:product
  };
  cart.push(newProduct)
  updateCarttotal(state,product.price)
}
const removeProduct=(state,cart,product)=>{
    state.cartProducts=cart.filter(item=>item.name!==product.name);
    updateCarttotal(state,-product.price)
};
const decrementProduct=(state,existingProduct,product)=>{
   existingProduct.quantity--;
   existingProduct.totalPrice-=product.price;
   updateCarttotal(state,-product.price)

}
const updateCarttotal=(state,productPrice)=>{
  state.totalQuantity+= productPrice > 0 ? 1 : -1 ;
  state.totalPrice+=productPrice;
}
export const {addtocart,removeFromcart,clearCart}=cartSlice.actions
export default cartSlice.reducer;