import React from 'react'
import './style.css'
const Adds = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-0 mt-1" >
                    <div className="adds1 " style={{width:'97%',margin:'auto'}}>
                    <div className="overlay p-4 " >
                        <h2 style={{ color: '#ffdf40' ,padding:'3px 0px'}}>Motot Oils</h2>
                        <p><b style={{ color: 'white' }}>Synthetic motor oil with free shipping<br />
                            Friction free life guaranteed</b></p>
                        <button className='btn btn-sm' style={{ backgroundColor: '#FF3333', color: 'white' }}>Shop now</button>
                    </div>
                </div>
                </div>
                <div className="col-lg-6  p-0 mt-1">
                    <div className="adds2" style={{width:'97%',margin:'auto'}}>
                    <div className="overlay p-4">
                        <h3 >SAVE UP TO $40</h3>
                        <p><b style={{ color: 'white' }}>Luxurious interior part for real aesthetes Leather, <br/> fabric, ivory and more.</b></p>
                        <button className='btn btn-sm' style={{ backgroundColor: '#FF3333', color: 'white' }}>Shop now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adds