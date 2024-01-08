import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { MDBBadge } from 'mdb-react-ui-kit';
import { FaHeart } from "react-icons/fa6";
import './Style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../Firebase/Firebase-config';
import { signOut } from 'firebase/auth'
import { useState } from 'react';
import { cartProducts } from '../../Features/CartSlice';
import { useEffect } from 'react';

function Header() {
  const navigate=useNavigate();
  const Logout = () => {
      signOut(auth);
      navigate('/signin');
  }
  const cartProducts = useSelector(state => state.cart.cartProducts)
  const totalQuantity=cartProducts?.reduce((total,product)=>{
    return total+product.quantity
  },0)
  return (
    <>
      <div className="container-fluid">
        <div className="row topbar">
          <div className="col-5 p-1 d-flex justify-content-around left-menu" >
            <a><b>Call Us: (800) 060-0730</b></a>
            <div className="d-flex gap-4">
              <a>About Us</a>
              <a>Contacts</a>
              <a>Track Order</a>
            </div>

          </div>
          <div className="col-2 middle">
            <p><b>AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES</b></p>
          </div>
          <div className="col-5 p-1 d-flex justify-content-around right-menu">
            <div className="d-flex gap-4">
              <a>Compare :<b> 5</b> </a>
              <a>Currency : <b>USD</b></a>
              <a>Language : <b>EN</b></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  px-md-5 mainbar " >
        <Navbar expand="md"  >
          < >
            <Link to={'/'} className='title' >
              <h3 ><span>Vehicle</span>Garage</h3>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse >
              <Nav
                className="me-auto my-2 my-lg-0 mx-3"
              >
                <Nav.Link><Link to={'/'} className='main-menu'> Home</Link></Nav.Link>
                <Nav.Link><Link to={'/shop'} className='main-menu'> Shop</Link></Nav.Link>
                <Nav.Link><Link to={'/cart'} className='main-menu'> Cart</Link></Nav.Link>
                <Nav.Link><Link to={'/add-product'} onClick={() => !auth.currentUser ? alert('Please Sign in First') : ''} className='main-menu'> Add Product</Link></Nav.Link>
              </Nav>
              <span className='ms-md-5 text-light'><FaHeart className='cart' /></span>
              <Link to={'/cart'} className='ms-3 text-light'><FaCartShopping className='cart' /> <MDBBadge color='dark' className=' translate-middle rounded-circle ' >{totalQuantity}</MDBBadge></Link>
              {auth.currentUser ?
                <button onClick={() => Logout() } className='btn btn-dark ms-5 logout'>Logout</button> :
                <Link to={'/signin'}><button className='btn btn-dark ms-5' >Sign In</button></Link>}
            </Navbar.Collapse>
          </>
        </Navbar>
      </div>
    </>
  );
}

export default Header;




