import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { db } from '../Firebase/Firebase-config';
import { collection, addDoc, getDocs, updateDoc ,doc,deleteDoc} from "firebase/firestore";


export const cartProducts=createAsyncThunk('cart/getCartProducts',async(_,{})=>{
  const querySnapshot=await getDocs(collection(db,'CartProducts'));
  const AllProducts=[];
  querySnapshot.forEach((doc)=>{
    const productData=doc.data();
    const productWithID={id:doc.id,...productData}
    AllProducts.push(productWithID)
  })
  return  AllProducts
})

export const cartSlice=createSlice({
  name:'cart',
  initialState:{
    cartProducts:[],
    quantity:0,
    totalQuantity:0,
    totalPrice:0
  },
  extraReducers:(builder)=>{
    builder.addCase(cartProducts.fulfilled,(state,action)=>{
     state.cartProducts=action.payload
    })
  },
  reducers:{
    addtocart:(state,action)=>{
        const product=action.payload;
        const existingProduct=state.cartProducts.find(item=>item.name===product.name)
        if(!!existingProduct){
          incrementProduct(state,existingProduct,product)
        }
        else{
          addnew(state,state.cartProducts,product)
        }
    },
    removeFromcart:(state,action)=>{
      const product=action.payload;
      console.log('products', state.cartProducts);
      const existingProduct= state.cartProducts.filter(item=>item.name===product.name);
      
      if(product.quantity===1){
          removeProduct(state,state.cartProducts,product)
      }
      else{
         decrementProduct(state,existingProduct,product)
      }
    },
    clearCart:async(state,action)=>{
      state.cartProducts=[];
      state.quantity=0;
      state.totalPrice=0;
      state.totalQuantity=0
    }
  },
  
});

const incrementProduct=async (state,existingProduct,product)=>{
  const { name, quantity, totalPrice, price } = existingProduct;
  const docref=doc(db,'CartProducts',name)
  await updateDoc(docref,{
    quantity:quantity+1,
    totalPrice:totalPrice+price,
  })
   updateCarttotal(state,product.price);
}
const addnew=async(state,cart,product)=>{
  await addDoc(collection(db, "CartProducts"), {
    name:product.name,
    image:product.image,
    price:product.price,
    desc:product.desc,
    quantity:1,
    totalPrice:product.price
  })
  // cart.push(newProduct)
  updateCarttotal(state,product.price)
}
const removeProduct=async(state,cart,product)=>{

   const docRef = doc(db, 'CartProducts', product.name);
    await deleteDoc(docRef);
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