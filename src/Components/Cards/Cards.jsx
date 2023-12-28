import React from 'react'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {FiPhoneCall} from 'react-icons/fi'
import {MdPayment} from 'react-icons/md'
import {MdOutlineLocalOffer} from 'react-icons/md'
import './cards.css'
const Cards = () => {
  return (
    <div className="container">
        <div className="cards d-flex flex-wrap justify-content-around gap-1 py-4" >
            <div >
                <div className="row m-auto" >
                    <div className="col-md-4 pt-2">
                     <i><LiaShippingFastSolid /></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>Free Shipping</h4>
                    <p> For orders from $50</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="row m-auto">
                    <div className="col-md-4 pt-2">
                     <i ><FiPhoneCall className='mt-4'/></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>Support 24/7</h4>
                    <p > Call us anytime</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="row m-auto" >
                    <div className="col-md-4 pt-3">
                     <i ><MdPayment /></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>100% Safety</h4>
                    <p > Only secure payments</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="row m-auto" >
                    <div className="col-md-4 pt-2">
                     <i  ><MdOutlineLocalOffer className='mt-3 '/></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>Hot Offers</h4>
                    <p > Discounts up to 90%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards