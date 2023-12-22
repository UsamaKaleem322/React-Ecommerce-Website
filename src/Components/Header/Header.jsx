import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartShopping } from "react-icons/fa6";
import { MDBBadge } from 'mdb-react-ui-kit';
import { FaHeart } from "react-icons/fa6";
import './Style.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../../Firebase/Firebase-config';
import {signOut} from 'firebase/auth'
function Header() {

const Logout=()=>{
  signOut(auth);
}
  const quantity = useSelector(state => state.cart.totalQuantity)
  return (
    <>
      <div className="container-fluid">
        <div className="row topbar">
          <div className="col-5 p-1 d-flex justify-content-around" style={{ backgroundColor: '#E52727', color: 'white', borderRadius: '0px 0px 70px 0px' }}>
            <a><b>Call Us: (800) 060-0730</b></a>
            <div className="d-flex gap-4">
              <a>About Us</a>
              <a>Contacts</a>
              <a>Track Order</a>
            </div>

          </div>
          <div className="col-2">
            <p style={{ fontSize: '9px', paddingTop: '8px' }}>
              <b>AUTO PARTS FOR CARS, TRUCKS AND MOTORCYCLES</b></p>
          </div>
          <div className="col-5 p-1 d-flex justify-content-around" style={{ backgroundColor: '#333333', color: 'white', borderRadius: '0px 0px 0px 70px' }}>
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
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <h3 ><span style={{ color: 'red' }}>Vehicle</span>Garage</h3>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse >
              <Nav
                className="me-auto my-2 my-lg-0 mx-3"
              >
                <Nav.Link><Link to={'/'} onClick={()=>!auth.currentUser? alert('Please Sign in First'):''} style={{ textDecoration: 'none', color: 'black' }}> Home</Link></Nav.Link>
                <Nav.Link><Link to={'/shop'} style={{ textDecoration: 'none', color: 'black' }}> Shop</Link></Nav.Link>
                <Nav.Link><Link to={'/cart'}  style={{ textDecoration: 'none', color: 'black' }}> Cart</Link></Nav.Link>
                <Nav.Link><Link to={'/add-product'}onClick={()=>!auth.currentUser? alert('Please Sign in First'):''}  style={{ textDecoration: 'none', color: 'black' }}> Add Product</Link></Nav.Link>
              </Nav>
              <span className='ms-md-5 text-light'><FaHeart style={{ fontSize: '23px', color: 'red' }} /></span>
              <Link to={'/cart'} className='ms-3 text-light'><FaCartShopping style={{ fontSize: '25px', color: 'red' }} /> <MDBBadge color='dark' className=' translate-middle rounded-circle' >{quantity}</MDBBadge></Link>
              {auth.currentUser? 
              <Link to={'/signin'}><button onClick={()=>Logout()  } className='btn btn-dark ms-5'>Logout</button></Link>:
              <Link to={'/signin'}><button className='btn btn-dark ms-5' style={{position:'relative',float:'right'}}>Sign In</button></Link>}
            </Navbar.Collapse>
          </>
        </Navbar>
      </div>
    </>
  );
}

export default Header;




