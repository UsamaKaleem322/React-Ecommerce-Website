import React from 'react'
import { GrFormNext } from 'react-icons/gr'
import { GrFormPrevious } from 'react-icons/gr'
const Carouselbar = ({title}) => {
  return (
    <div className="container d-flex flex-wrap justify-content-between mt-5 carouselBar">
                <h2>{title}</h2>
                <div className="div menu">
                    <button className='btn btn-sm btn-dark py-0 all'>All</button>
                    <button className='btn btn-sm btn-outline'>Power Tools</button>
                    <button className='btn btn-sm btn-outline'>Hand Tools</button>
                    <button className='btn btn-sm btn-outline'>Plumbing</button>
                     
                    <button className='btn btn-sm me-2 py-0 arrow' ><GrFormPrevious fontSize={'19px'} /></button>
                    <button className='btn btn-sm py-0 arrow' ><GrFormNext fontSize={'19px'} /></button>
                </div>
            </div>
  )
}

export default Carouselbar