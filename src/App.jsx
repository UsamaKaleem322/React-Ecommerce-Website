import React from 'react'
import Header from './Components/Header/Header';
import SingleProduct from './Components/Product/Product'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import PageTransition from './Pagetransition/Pagetransition';
import Productlist from './Components/Productlist/Productlist';
import Signin from './Auth/Signin/Signin';
import Signup from './Auth/Signup/Signup';
const App = () => {
  return (
    <>
      <Router>   
        <Header />
        <Routes>

        <Route path={'/'} element={<PageTransition><Home/></PageTransition>}/>
        <Route path='/:id' element={<PageTransition><SingleProduct/></PageTransition> }/>
        <Route path='/shop' element={<PageTransition><Productlist/></PageTransition>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer />
      </Router>  
    </>
  )
}

export default App