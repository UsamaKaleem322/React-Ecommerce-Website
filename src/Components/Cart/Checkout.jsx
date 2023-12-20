import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCheckbox
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../Features/CartSlice';

const Checkout = () => {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch=useDispatch()
  return (
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
                      <p className="mb-1">Checkout</p>
                    </div>
                  </div>

                  <form className="mt-4">
                  <MDBInput className="mb-4" type="text" size="lg"
                    placeholder="Name..." contrast required/>
                  <MDBInput className="mb-4" type="number" size="lg"
                    minLength="19" maxLength="19" placeholder="Phone..." contrast required />
                    <MDBInput className="mb-4" type="text" size="lg"
                    placeholder="Address" contrast required/>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Cash on Delievry' defaultChecked />
                  <Link to={'/shop'}>
                  <button className='btn btn-primary my-4' onClick={()=>dispatch(clearCart())}>Submit</button>
                  </Link>
                  
                </form>

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
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  )
}

export default Checkout