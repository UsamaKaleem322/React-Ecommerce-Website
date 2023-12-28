import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBCheckbox
} from "mdb-react-ui-kit";
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../Firebase/Firebase-config';
import { doc, deleteDoc, addDoc, collection } from 'firebase/firestore';
import { auth } from '../../Firebase/Firebase-config';
import { cartProducts } from '../../Features/CartSlice';
const Checkout = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const CartProducts = useSelector(state => state.cart.cartProducts)
  const totalPrice = CartProducts.reduce((total, product) => {
    return total + product.price
  }, 0);
  const [checkoutFields, setCheckoutFields] = useState({});

  const handleChange = (e) => {
    return setCheckoutFields({ ...checkoutFields, [e?.target?.name]: e?.target?.value });
  }


  const CheckoutCart = async (e) => {
    e.preventDefault()
    const user = auth?.currentUser
    const checkoutCollectionRef = collection(db, 'Checkout');
    await addDoc(checkoutCollectionRef, {
      phone: checkoutFields?.phone,
      address: checkoutFields?.address,
      cnic: checkoutFields.cnic,
      name:user?.displayName,
      email:user?.email,
      totalPrice:totalPrice,
      products:CartProducts
    });

    CartProducts.map(async (product) => {
      const docRef = doc(db, 'CartProducts', product.id);
      await deleteDoc(docRef)
    })
    dispatch(cartProducts())
    navigate('/shop')
    window.location.reload()
  }

  return (
    <section className="h-100 h-custom" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <Link to={'/shop'} className="text-body">
                        <FaArrowLeftLong /> Continue shopping
                      </Link>
                    </MDBTypography>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Checkout</p>
                      </div>
                    </div>
                    <form className="mt-4" onSubmit={CheckoutCart}>

                      <input className="form-control mb-4" type="number" onChange={(e) => handleChange(e)} name='phone' minLength="11" maxLength="11" placeholder="Phone..." required />

                      <input className="form-control mb-4" type="text" name='address' placeholder="Address" onChange={(e) => handleChange(e)} required />

                      <input className="form-control mb-4" type="text" name='cnic' placeholder="CNIC..." onChange={(e) => handleChange(e)}  required/>

                      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Cash on Delievry' defaultChecked />
                      <button className='btn btn-primary my-4' > Submit</button>
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