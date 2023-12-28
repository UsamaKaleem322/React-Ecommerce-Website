import React from 'react'
import './style.css'
const Footer = () => {
    return (
        <>
        <div className="container-fluid p-4 footer"  >
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-3">
                        <h4>Contact Us</h4>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.</p>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <p>PHONE NUMBER</p>
                                <h6 >+1 (800) 060-07-30</h6>
                            </div>
                            <div className="col-md-6">
                                <p >EMAIL ADDRESS</p>
                                <h6 >info@nexthorizondigital.au</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <p >OUR LOCATION</p>
                                <h6 >715 Fake Street, New York 10021 USA</h6>
                            </div>
                            <div className="col-md-6">
                                <p >WORKING HOURS</p>
                                <h6 >Mon-Sat 10:00pm - 7:00pm</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Information</h4>
                                
                                <li >About Us</li>
                                <li>Delivery Information</li>
                                <li>Privacy Policy</li>
                                <li>Brands</li>
                                <li>Contact Us</li>
                                <li>Returns</li>
                                <li>Site Map</li>


                            </div>
                            <div className="col-md-6">
                                <h4>My Account</h4>
                                
                                <li>Store Location</li>
                                <li>Order History</li>
                                <li>Wish List</li>
                                <li>Newsletter</li>
                                <li>Specials</li>
                                <li>Gift Certificates</li>
                                <li>Affiliate</li>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <h4>Newsletter</h4>
                        <p>Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
                        <form action="" className='d-flex gap-3 mb-3'>
                            <input type="email" placeholder='Email Address..' className='form-control' />
                            <button className='btn' onClick={e=>e.preventDefault()} >Subscribe</button>
                        </form>
                        <p>Follow us on social networks</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid copyright"> 
        <div className="container py-2 " >
            <div className="row">
                <div className="col-md-6">
                <p >@Copyright 2023 , Created by <b >Usama Kaleem</b></p>
                </div>
                <div className="col-md-6 ">
                <img src="/Images/payments.png" alt="" />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer