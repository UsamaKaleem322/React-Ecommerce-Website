import React from 'react';
import './banner.css';
const Banner = () => {
    return (
        <div className='banner text-center' >
            <div className="overlay ">
                <h1 style={{ fontSize: '50px', color: 'white' }}>Find Parts For Your Vehicle</h1>
                <h5 style={{ color: 'white' }}>Over hundreds of brands and tens of thousands of parts</h5>
                <form>
                    <div className="row py-5">
                        
                            <div className="col-md-3 my-1">
                                <select name="year" id="year" className='form-select'>
                                    <option value="year">Select year</option>
                                    <option value="year">2010</option>
                                    <option value="year">2011</option>
                                    <option value="year">2012</option>
                                    <option value="year">2013</option>
                                    <option value="year">2014</option>
                                    <option value="year">2015</option>
                                    <option value="year">2016</option>
                                    <option value="year">2017</option>
                                    <option value="year">2018</option>
                                    <option value="year">2019</option>
                                    <option value="year">2020</option>
                                </select>
                            </div>
                            <div className="col-md-3 my-1">
                                <select name="year" id="year" className='form-select' >
                                    <option value="year">Select Make</option>
                                    <option value="year">2010</option>
                                    <option value="year">2011</option>
                                    <option value="year">2012</option>
                                    <option value="year">2013</option>
                                    <option value="year">2014</option>
                                    <option value="year">2015</option>
                                    <option value="year">2016</option>
                                    <option value="year">2017</option>
                                    <option value="year">2018</option>
                                    <option value="year">2019</option>
                                    <option value="year">2020</option>
                                </select>
                            </div>
                            <div className="col-md-3 my-1">
                                <select name="year" id="year" className='form-select' >
                                    <option value="year">Select Model</option>
                                    <option value="year">2010</option>
                                    <option value="year">2011</option>
                                    <option value="year">2012</option>
                                    <option value="year">2013</option>
                                    <option value="year">2014</option>
                                    <option value="year">2015</option>
                                    <option value="year">2016</option>
                                    <option value="year">2017</option>
                                    <option value="year">2018</option>
                                    <option value="year">2019</option>
                                    <option value="year">2020</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <button className='btn w-100' onClick={e=>e.preventDefault()} style={{ backgroundColor: '#E52727', color: 'white' }}>Submit</button>
                            </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Banner