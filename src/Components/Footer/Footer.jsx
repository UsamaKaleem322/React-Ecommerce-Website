import React from 'react'
const Footer = () => {
    return (
        <>
        <div className="container-fluid p-4" style={{ backgroundColor: '#333333', color: 'white' }} >
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-3">
                        <h4>Contact Us</h4>
                        <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.</p>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <p style={{ color: 'gray' }}>PHONE NUMBER</p>
                                <h6 style={{ marginTop: '-15px' }}>+1 (800) 060-07-30</h6>
                            </div>
                            <div className="col-md-6">
                                <p style={{ color: 'gray' }}>EMAIL ADDRESS</p>
                                <h6 style={{ marginTop: '-15px' }}>info@nexthorizondigital.au</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <p style={{ color: 'gray' }}>OUR LOCATION</p>
                                <h6 style={{ marginTop: '-15px' }}>715 Fake Street, New York 10021 USA</h6>
                            </div>
                            <div className="col-md-6">
                                <p style={{ color: 'gray' }}>WORKING HOURS</p>
                                <h6 style={{ marginTop: '-15px' }}>Mon-Sat 10:00pm - 7:00pm</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Information</h4>
                                
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>About Us</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Delivery Information</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Privacy Policy</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Brands</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Contact Us</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Returns</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Site Map</li>


                            </div>
                            <div className="col-md-6">
                                <h4>My Account</h4>
                                
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Store Location</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Order History</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Wish List</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Newsletter</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Specials</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Gift Certificates</li>
                                <li style={{ listStyle: 'none', color: 'gray', marginBottom: '5px' }}>Affiliate</li>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <h4>Newsletter</h4>
                        <p style={{color:'gray'}}>Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
                        <form action="" className='d-flex gap-3'>
                            <input type="email" placeholder='Email Address..' className='form-control' />
                            <button className='btn' onClick={e=>e.preventDefault()} style={{backgroundColor:'#FF3333',color:'white'}}>Subscribe</button>
                        </form>
                        <p style={{color:'gray' , padding:'10px 0px'}}>Follow us on social networks</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid " style={{backgroundColor:'#2B2B2B'}}> 
        <div className="container py-2 " >
            <div className="row">
                <div className="col-md-6">
                <p style={{color:"gray",marginTop:'8px'}}>@Copyright 2023 , Created by <b style={{color:'white'}}>Usama Kaleem</b></p>
                </div>
                <div className="col-md-6 ">
                <img src="/Images/payments.png" height={'32px'} style={{marginTop:'8px',float:'right',width:'300px'}} alt="" />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer