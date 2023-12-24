import React, { memo } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../Features/CartSlice';
const SingleProduct = () => {
  const product = useSelector(state => state.products.product)
  const dispatch=useDispatch();

  return (
    <Container >
      
        {product.map((item, index) => {
          return (
            <Row className='my-5' key={index}>
              <Col md={6} >
                <img src={item.image} className='card-image' alt="" />
            </Col>
            <Col md={6}  >
              <Card className='card-content'>
                <Card.Body >
                  <h1 style={{ textDecoration: 'none' }}>{item.name}</h1>
                  <h3 style={{ color: 'orange' }}>15% off Today</h3>
                  <Card.Text className='me-5'>
                    {item.desc}
                  </Card.Text>
                  
                  <h5 className='my-3'>Price : ${item.price}</h5>
                  <Button variant="success " className='my-3' onClick={() => {return(dispatch(addtocart({id:item.id, name:item.name, image:item.image, price:item.price, desc:item.desc,quantity:1,totalPrice:item.price})), alert('Product Add Successfully') ) }
            } >Add to Cart</Button>
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
