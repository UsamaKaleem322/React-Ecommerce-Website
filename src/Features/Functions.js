import { useSelector } from 'react-redux';
import { db } from '../Firebase/Firebase-config';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

const cartProducts=useSelector((state)=>state.cart.cartProducts);

export const addnew = async (product) => {
  const existingProduct=await cartProducts.find(item=>item.id==product.id);
  
  {!!existingProduct && await addDoc(collection(db, "CartProducts"), {
    name: product.name,
    image: product.image,
    price: product.price,
    desc: product.desc,
    quantity: 1,
    totalPrice: product.price
  })}
};
