import React from 'react'
import './style.css'
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux'
import { useMemo } from 'react';
import CardProduct from '../Products/Card';
import { LiaStarSolid } from 'react-icons/lia'
import { RiStarSLine } from 'react-icons/ri'
import Form from 'react-bootstrap/Form';
const Productlist = () => {
  const products = useSelector(state => state?.products?.allProducts)
  const categories=[...new Set(products?.map(product=>product.category))]

  const colors=['Black', 'Grey', 'Red ','Blue', 'Orange',  'Brown', 'Pink', 'Yellow', 'Green', 'Purple', 'Maroon', 'Turquoise', 'Cyan', 'Navy', 'blue', 'Gold', 'Tomato', 'Teal', 'Lime', 'Cyan', 'Chocolate',  'Dark', 'blue', 'Navy']
  return (
    <>
      <div className="container-fluid ">
        <h1 style={{ textAlign: 'center' }}>Shop</h1>
        <div className="row my-5 px-lg-5 mx-lg-5">
          <div className="col-lg-3 sidebar p-0 " style={{height:'fit-content'}}>
            <h4 className='p-3' style={{ borderBottom: '1px solid lightgray' }}>Filters</h4>
            <Accordion defaultActiveKey={'0'} flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>Categories</b> </Accordion.Header>
                <Accordion.Body>
                  {categories.map(item=>
                    <div className='d-flex justify-content-between p-0'>
                    <p>{item}</p>
                  </div>
                    )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><b>Vehicle</b></Accordion.Header>
                <Accordion.Body>
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="control d-flex justify-content-between">
                      <div className='d-flex'>
                        <input className='form-check-input me-2 ' type="radio" name="vehicle" id="vehicle" />
                        <p>All Parts</p>
                      </div>
                      <p style={{ fontSize: '12px' }}>57</p>
                    </div>
                    <div className="control d-flex justify-content-between">
                      <div className='d-flex'>
                        <input className='form-check-input me-2' type="radio" name="vehicle" id="vehicle" />
                        <p>2011 Ford Focus S</p>
                      </div>
                      <p style={{ fontSize: '12px' }}>12</p>
                    </div>
                    <div className="control d-flex justify-content-between">
                      <div className='d-flex'>
                        <input className='form-check-input me-2' type="radio" name="vehicle" id="vehicle" />
                        <p>2015 Audi A3</p>
                      </div>
                      <p style={{ fontSize: '12px' }}>51</p>
                    </div>
                    <button className='btn btn-sm btn-outline-primary'>Add Vehicle</button>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><b>Price</b></Accordion.Header>
                <Accordion.Body>
                  <Form.Range />
                  <div className="range d-flex justify-content-between">
                    <p className='my-2'>$5000 - $8900</p>
                    <button className='btn btn-outline-primary btn-md'>Filter</button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><b>Rating</b></Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex justify-content-between">
                    <div className="icons">
                      <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                      <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                      <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                      <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                      <RiStarSLine color='#FFD333' fontSize={'20px'} />
                    </div>
                    <span color='gray'>4 on 3 reviews</span>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header><b>Color</b></Accordion.Header>
                <Accordion.Body>
                <div className="d-flex flex-wrap justify-content-between gap-2">
                  {colors.map(item=>
                         <button style={{backgroundColor:item,borderRadius:'100%',padding:'8px',border:'none'}}> </button>
                    )}
                    </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-9 ps-3">
            <div className="row cards ">
              {products.map((item, index) => {
                return (
                  <div className="col-md-6 col-lg-6 col-xl-4 col-xxl-3 my-2" key={index}>
                    <CardProduct name={item.name} image={item.image} desc={item.desc} price={item.price} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productlist