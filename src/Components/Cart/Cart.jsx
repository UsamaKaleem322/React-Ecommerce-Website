import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase-config';
import Loading from '../Loading/Loading';
import { cartProducts } from '../../Features/CartSlice';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase/Firebase-config';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import './Style.css'
const Cart = () => {
  const allCartProducts = useSelector(state => state?.cart?.cartProducts);
  const loading = useSelector(state => state?.cart?.loading);
  const totalPrice = allCartProducts?.reduce((total, product) => {
    return total + product.price
  }, 0);
  const totalQuantity = allCartProducts?.reduce((total, product) => {
    return total + product.quantity
  }, 0);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <section className="h-100 h-custom">
        {<MDBContainer className="py-5 h-100">
          <MDBRow >
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <Link to={'/shop'} className="text-body">
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
                          <p className="mb-0">You have {totalQuantity} items in your cart</p>
                        </div>
                      </div>

                      {!loading ?
                        allCartProducts?.map( (product) => {

                          const removeFromcart = async () => {
                            if (product.quantity>1) {
                              const docRef = doc(db, 'CartProducts', product.id);
                              alert('1 Product Quantity Decrease')
                              await updateDoc(docRef, {
                                quantity: product?.quantity - 1,
                                totalPrice: product?.totalPrice - product?.price
                              })
                            }
                            else{
                              const docRef = doc(db, 'CartProducts', product.id);
                              alert("Product Remove Successfuly")
                              await deleteDoc(docRef);
                            }
                            dispatch(cartProducts());
                          }
                          return (
                            <MDBCard className="mb-3">
                              <div key={product?.id} className='row'>
                                <div className='col-md-2 m-auto'>
                                  <img
                                    src={product?.image}
                                    fluid className="rounded-3 cart-image"
                                    alt="Shopping item" />
                                </div>
                                <div className="col-md-10" >
                                  <div className="row p-3">
                                    <div className="col-md-8">
                                      <h5>{product?.name?.slice(0, 30)}</h5>
                                      <p className="small mb-0">{product?.desc?.slice(0, 120)}</p>
                                    </div>
                                    <div className="col-md-4 my-2">
                                      <div className="d-flex justify-content-between my-md-3">
                                        <div >
                                          <MDBTypography tag="h5" className="mb-0">
                                            ${product?.totalPrice}
                                          </MDBTypography>
                                        </div>
                                        <div>
                                          <MDBTypography tag="h5" className="fw-normal mb-0">
                                            {product?.quantity}
                                          </MDBTypography>
                                        </div>
                                        <div>
                                          <a
                                            onClick={() => removeFromcart()}
                                            style={{ color: "red", cursor: 'pointer' }}>
                                            <FaTrashAlt />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </MDBCard>
                          )
                        }) : <Loading />}

                    </MDBCol>

                    <MDBCol lg="5">
                      <MDBCard className="bg-primary text-white rounded-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Checkout details
                            </MDBTypography>
                          </div>
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

                          {!!allCartProducts?.length > 0 && <button className='btn btn-info my-3' onClick={() => auth?.currentUser ? navigate('/checkout') : navigate('/signin')}>Proceed to Checkout</button>}

                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>}

      </section>:
    </>
  )
}

export default Cart;