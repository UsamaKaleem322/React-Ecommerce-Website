import React from 'react'
import Card from 'react-bootstrap/Card';
import { LiaStarSolid } from 'react-icons/lia'
import { RiStarSLine } from 'react-icons/ri'
import Carouselbar from '../Products/Carouselbar';
import Loading from '../Loading/Loading';
import './style.css'
import { useSelector } from 'react-redux';
const New = () => {
    const products = useSelector(state => state.products.allProducts).slice(0,8);
    const loading=useSelector(state=>state.products.loading);
    return (
        <div className='container'>
            <Carouselbar title={'New Arrivals'} />

            {!loading? <div className="d-flex flex-wrap justify-content-center gap-md-3 gap-lg-1 pt-3" >
                {products.map((item) => {
                    return (
                        <div className='mt-1' style={{ border: '1px solid lightgray', width: '20rem' }}>
                            <div className="row">
                                <div className="col-md-3 pt-2">
                                    <img src={item.image} width={'100px'} alt="" />
                                </div>
                                <div className="col-md-9 px-4 py-3">
                                    <h6 >{item.name.slice(0,40)}</h6>
                                    <div className="d-flex justify-content-between" style={{ marginTop: '-8px' }}>
                                        <div className="icons">
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <LiaStarSolid color='#FFD333' fontSize={'20px'} />
                                            <RiStarSLine color='#FFD333' fontSize={'20px'} />
                                        </div>
                                        <span color='gray'>4 on 3 reviews</span>
                                    </div>
                                    <h6 >${item.price}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>:<Loading/>}
            <Carouselbar title={'Latest News'} />
            <div className="d-flex flex-wrap justify-content-around gap-1 my-4">
                <div >
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news1.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>Special Offers</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div >
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news2.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>Latest News</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div >
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news3.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>New Arrivals</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant='top' src='/Images/news4.jpg' />
                        <Card.Body>
                            <button className='btn' style={{ color: 'red', marginTop: '-30px' }}>Special Offers</button>
                            <Card.Title>Philosophy That Addresses Topics Such As Goodness</Card.Title>
                            <Card.Text>
                                — By Jessica Moore on October 19, 2019
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>


        </div>
    )
}

export default New