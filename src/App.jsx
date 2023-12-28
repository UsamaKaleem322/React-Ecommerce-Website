import React from 'react'
import Header from './Components/Header/Header';
import SingleProduct from './Components/Product/Product'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import PageTransition from './Pagetransition/Pagetransition';
import Productlist from './Components/Productlist/Productlist';
import Signin from './Auth/Signin/Signin';
import Signup from './Auth/Signup/Signup';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout';
import Add from './Components/Add Product/Add';
import { auth } from './Firebase/Firebase-config';
import { fetchProducts } from './Features/ProductSlice';
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts } from './Features/CartSlice';

const RequiredAuth=({children})=>{
  return auth.currentUser?children :<Navigate to={'/signin'}/>
}
const App = () => {
  const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
        dispatch(cartProducts())
    },[dispatch])
  return (
    <>
      <Router>   
        <Header />
        <Routes>
        <Route exact path={'/'} element={<PageTransition><Home/></PageTransition>}/>
        <Route exact path='/:id' element={<PageTransition><SingleProduct/></PageTransition> }/>
        <Route exact path='/shop' element={<PageTransition><Productlist/></PageTransition>}/>
        <Route exact path='/cart' element={<PageTransition><Cart/></PageTransition>}/>
        <Route exact path='/checkout' element={<PageTransition><Checkout/></PageTransition>}/>
        <Route exact path='/add-product' element={<PageTransition><RequiredAuth><Add/></RequiredAuth></PageTransition> }/>
        <Route exact path='/signin' element={<Signin/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer />
      </Router>  
    </>
  )
}

export default App