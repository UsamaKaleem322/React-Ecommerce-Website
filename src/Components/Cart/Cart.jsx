import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromcart } from '../../Features/CartSlice';
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import './Style.css'
const Cart = ({ handleShow, openmodel }) => {
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const quantity = useSelector(state => state.cart.totalQuantity)
  console.log(cartProducts);
  const dispatch = useDispatch()
  return (
    <>
       {quantity>0?
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <Link to={'/shop'} style={{ textDecoration: 'none' }} className="text-body">
                          <FaArrowLeftLong /> Continue
                          shopping
                        </Link>
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                        </div>
                        <div>
                          <p className="mb-0">You have {quantity} items in your cart</p>

                        </div>
                      </div>

                      {cartProducts.map(product => {
                        return (
                          <MDBCard className="mb-3">
                            <MDBCardBody>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    <MDBCardImage
                                      src={product.img}
                                      fluid className="rounded-3" style={{ width: "65px" }}
                                      alt="Shopping item" />
                                  </div>
                                  <div className="ms-3">
                                    <MDBTypography tag="h5">
                                      {product.name}
                                    </MDBTypography>
                                    <p className="small mb-0">{product.text.slice(0, 88)}</p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: "50px" }}>
                                    <MDBTypography tag="h5" className="fw-normal mb-0">
                                      {product.quantity}
                                    </MDBTypography>
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <MDBTypography tag="h5" className="mb-0">
                                      ${product.price}
                                    </MDBTypography>
                                  </div>
                                  <a onClick={() => dispatch(removeFromcart(product))} style={{ color: "red", cursor: 'pointer' }}>
                                    <FaTrashAlt />
                                  </a>
                                </div>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                        )
                      })}

                    </MDBCol>

                    <MDBCol lg="5">
                      <MDBCard className="bg-primary text-white rounded-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Checkout details
                            </MDBTypography>

                          </div>


                          {/* <form className="mt-4">
                      <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                        placeholder="Cardholder's Name" contrast />

                      <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                      <MDBRow className="mb-4">
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                      </MDBRow>
                    </form> */}

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">${totalPrice}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$0</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">${totalPrice}</p>
                          </div>
                          <Link to={'/checkout'}>
                          <button className='btn btn-info my-3'>Proceed to Checkout</button>
                          </Link>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>:
      <div className='ms-md-5 text-center'>
         <img src='/Images/no.webp' />
         <h3 className='my-2'>Your Cart is Currently Empty</h3>
         <Link to={'/shop'}><button className='btn btn-outline-dark my-4'><FaArrowLeftLong/> Continue Shooping</button></Link>
         </div> 
}
    </>
  )
}

export default Cart;