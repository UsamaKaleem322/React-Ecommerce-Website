import React, { useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { LiaStarSolid } from 'react-icons/lia'
import { RiStarSLine } from 'react-icons/ri'
import { BsCartCheck } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { PiBracketsSquareThin } from 'react-icons/pi'
import { addtocart , incrementCartProduct} from '../../Features/CartSlice';
import { MdDone } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { singleProduct } from '../../Features/ProductSlice';
import { useDispatch, useSelector, } from 'react-redux';
import { cartProducts } from '../../Features/CartSlice';
const CardProduct = ({id, name, image, desc, price ,category}) => {
  const CartProducts=useSelector(state=>state.cart.cartProducts);
  
  const dispatch = useDispatch()

  // useEffect(()=>{
  //    dispatch(cartProducts())
  // },[dispatch])

  const handleCart=async()=>{
    const productExist =await CartProducts?.find(item => item.id === id);
     console.log(productExist);
     if(productExist){
       dispatch(incrementCartProduct(productExist))
    }else{
      dispatch(addtocart({ name, image, price, desc,category, quantity: 1, totalPrice: price }))
     }
     alert('Product Add Successfully')
  }
  return (
    <>
      <Card className='card product' onClick={() => dispatch(singleProduct(id))}>
        <Link to={'/' + id} className='link'>
          <Card.Img variant="top" src={image} className='img' />
          <div className="button">
            <button className='btn  btn-sm'  >Sale</button>
          </div>
          <div className="heart" >
            <span><AiFillHeart /></span>
          </div>
          <div className="focus">
            <span><PiBracketsSquareThin /></span>
          </div>
        </Link>
        <Card.Body>
          
          <Badge bg='success'><MdDone fontSize={'15px'} /></Badge>
          <p >{category}</p>
          <Card.Title className='title'>{name.slice(0,40)}</Card.Title>
          <div className="d-flex justify-content-between">
            <div className="icons">
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <RiStarSLine className='stars' />
            </div>
            <span color='gray'>4 on 3 reviews</span>
          </div>
          <div className="d-flex justify-content-between my-2">
            <Card.Title>${price}</Card.Title>
            <span ><BsCartCheck className='cart' onClick={() => handleCart()} /></span>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardProduct