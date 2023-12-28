import React from 'react'
import './style.css'
const Adds = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-0 mt-1" >
                    <div className="adds1 ">
                    <div className="overlay " >
                        <h3>Motot Oils</h3>
                        <p><b >Synthetic motor oil with free shipping<br />
                            Friction free life guaranteed</b></p>
                        <button className='btn btn-sm'>Shop now</button>
                    </div>
                </div>
                </div>
                <div className="col-lg-6  p-0 mt-1">
                    <div className="adds2" >
                    <div className="overlay">
                        <h3 >SAVE UP TO $40</h3>
                        <p><b>Luxurious interior part for real aesthetes Leather, <br/> fabric, ivory and more.</b></p>
                        <button className='btn btn-sm' >Shop now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adds