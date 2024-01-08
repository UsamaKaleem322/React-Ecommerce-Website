import React, { memo } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase/Firebase-config';
import { cartProducts } from '../../Features/CartSlice';
const SingleProduct = () => {
  const product = useSelector(state => state.products.product)
  const dispatch=useDispatch();
  const allCartProducts=useSelector(state=>state.cart.cartProducts)
  return (
    <Container >
      
        {product?.map((item, index) => {
          const handleCart=async()=>{
            const existing=allCartProducts?.find(item=>item.productId==id)
            if(existing){
              const docRef=doc(db,'CartProducts',existing.id);
              await updateDoc(docRef,{
                quantity:existing?.quantity+1,
                totalPrice:existing?.totalPrice+price
              })      
            }
            else{
              await addDoc(collection(db, "CartProducts"), {
                productId:id,
                name: name,
                image: image,
                price: price,
                desc:desc,
                category:category,
                quantity: 1,
                totalPrice:price
              });
            }
            alert('Product Added Successfully')
            dispatch(cartProducts())
              
          }
          return (
            <Row className='my-5' key={index}>
              <Col md={6} >
                <img src={item.image} className='card-image' alt={item.image} />
            </Col>
            <Col md={6}  >
              <Card className='card-content'>
                <Card.Body >
                  <h1>{item.name}</h1>
                  <h3 >{item.category}</h3>
                  <Card.Text className='me-5'>
                    {item.desc}
                  </Card.Text>
                  
                  <h5 className='my-3'>Price : ${item.price}</h5>
                  <Button variant="success " className='my-3' onClick={() => handleCart()}
             >Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>

          )
        })}

      
    </Container>
  );
};

export default memo(SingleProduct);
