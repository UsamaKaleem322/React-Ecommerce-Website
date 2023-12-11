import React from 'react'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {FiPhoneCall} from 'react-icons/fi'
import {MdPayment} from 'react-icons/md'
import {MdOutlineLocalOffer} from 'react-icons/md'
const Cards = () => {
  return (
    <div className="container">
        <div className="d-flex flex-wrap justify-content-around gap-1 py-4" style={{borderBottom:'1px solid gray'}}>
            <div >
                <div className="row" style={{margin:'auto'}}>
                    <div className="col-md-4 pt-2">
                     <i style={{fontSize:'55px',color:'#E52727'}}><LiaShippingFastSolid /></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>Free Shipping</h4>
                    <p style={{marginTop:'-8px',color:'gray'}}> For orders from $50</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="row"style={{margin:'auto'}}>
                    <div className="col-md-4 pt-2">
                     <i style={{fontSize:'50px',color:'#E52727'}}><FiPhoneCall className='mt-4'/></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>Support 24/7</h4>
                    <p style={{marginTop:'-8px',color:'gray'}}> Call us anytime</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="row" style={{margin:'auto'}}>
                    <div className="col-md-4 pt-3">
                     <i style={{fontSize:'55px',color:'#E52727'}}><MdPayment /></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>100% Safety</h4>
                    <p style={{marginTop:'-8px',color:'gray'}}> Only secure payments</p>
                    </div>
                </div>
            </div>
            <div >
                <div className="row" style={{margin:'auto'}}>
                    <div className="col-md-4 pt-2">
                     <i style={{fontSize:'50px',color:'#E52727'}} ><MdOutlineLocalOffer className='mt-3 '/></i>
                    </div>
                    <div className="col-md-8">
                    <h4 className='mt-4'>Hot Offers</h4>
                    <p style={{marginTop:'-8px',color:'gray'}}> Discounts up to 90%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards