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
      <Card className='card product' onClick={() => dispatch(singleProduct(id))} style={{ cursor: 'pointer', height:'420px' }}>
        <Link to={'/' + id} style={{ textDecoration: 'none', color: 'black' }}>
          <Card.Img variant="top" src={image} height={'200px'} width={'200px'} />
          <div className="button">
            <Link></Link>
            <button className='btn  btn-sm ' style={{ color: 'wheat' }} >Sale</button>
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
          <p style={{ fontSize: '12px', marginTop: '10px', color: 'grey' }}>{category}</p>
          <Card.Title style={{ fontSize: "18px" }}>{name.slice(0,40)}</Card.Title>
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