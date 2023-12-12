import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { removeFromcart } from '../../Features/CartSlice';
const CartModel = ({ handleShow, openmodel }) => {
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const dispatch = useDispatch()
  return (
    <>
      <Offcanvas show={openmodel} placement='end' onHide={handleShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Products</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartProducts.length>0? cartProducts.map((item, index) => {
            return (
              <div className="row mb-2 border-bottom" key={index} >
                <div className="col-3">
                  <img src={item.img} alt={item.name} style={{ width: '80px', height: '100px' }} />
                </div>
                <div className="col-9">
                  <div className='row'>
                    <div className="col-md-9"><h5>{item.name}</h5></div>
                    <div className="col-md-3"><h5>${item.price}</h5></div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h6>Quantity : {item.quantity}</h6>
                    <button onClick={() => dispatch(removeFromcart(item))} className='btn btn-sm btn-danger'>Remove</button>
                  </div>
                </div>
              </div>
            )
          }):<p>No Cart Products Available</p> }

          <h5  >Total Price : ${totalPrice}</h5>
        </Offcanvas.Body>
      
      </Offcanvas>
    </>
  )
}

export default CartModel;