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

  return (
    <Container >
      
        {product?.map((item, index) => {
          const handleCart=async()=>{
            alert('Product Add Successfully')
            await addDoc(collection(db, "CartProducts"), {
              name: item.name,
              image: item.image,
              price: item.price,
              desc:item.desc,
              category:item.category,
              quantity: 1,
              totalPrice:item.price
            });
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
