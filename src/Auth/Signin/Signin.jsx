import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { auth} from '../../Firebase/Firebase-config';
import {signInWithEmailAndPassword} from 'firebase/auth'
import Socialbuttons from '../Socialbuttons';
import React from 'react';
import '../style.css'
function Signin() {

  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    try {
    await signInWithEmailAndPassword(auth,email,password)  
    navigate('/')
    } catch (error) {
      alert('Login Failed! Try Again')
    }
  }
  
  return (
    <Container>
      <Row className='login mt-5'>
        <Col xs={7}>
          <h3>Sign In</h3>
          <form className='pe-3 my-5' onSubmit={e=>handleSubmit(e)}>
            <input type="email" name='email' required className='form-control my-4' placeholder='Email....' />
            <input type="password" minLength={6} name='password' required className='form-control my-4' placeholder='Password....' />

            <button className='btn btn-dark' style={{width:'auto'}} type='submit'>Sign In</button>
          </form>

        </Col>
        <Col xs={5} className='my-5'>
          <Socialbuttons/>
        </Col>
      </Row>
      <Row className='signup-bar'>
        <Col className='d-flex justify-content-center'>
          <p className='pt-2'>Don't have an account ? </p>
          <Link to={'/signup'}>
            <button className='btn  btn-outline-dark mx-3 mt-1'>Sign Up</button>
          </Link>
        </Col>
      </Row>
    </Container>
  //   <Container className='signin-form my-5'>
  //   <form onSubmit={e=>handleSubmit(e)}>
  //     <h3>Sign In</h3>
  //   <MDBInput className='my-4' name='email' type='email' id='form2Example1' placeholder='Email Address....' />
  //   <MDBInput className='mb-4' name='password' type='password' id='form2Example2' placeholder='Password....'/>

  //   <MDBRow className='mb-4'>
      
  //     <MDBCol>
  //       <Link style={{textDecoration:'none'}} >Forgot Password</Link>
  //     </MDBCol>
  //   </MDBRow>

  //   <MDBBtn type='submit' className='mb-4' block>
  //     Sign in
  //   </MDBBtn>

  //   <div className='text-center'>
  //     <p>
  //       Not a member? <Link style={{textDecoration:'none'}} to={'/signup'}>Sign Up</Link>
  //     </p>
  //     <p>Or Sign Up With</p>


  //     <button className=' btn btn-sm btn-outline-danger  mx-1 pb-2' style={{fontSize:'16px', borderRadius:'50px'}}>
  //       <FaGoogle />
  //     </button>
      
  //     <button className=' btn btn-sm btn-outline-primary  mx-1 pb-2' style={{fontSize:'20px', borderRadius:'50px'}}>
  //       <RiFacebookBoxLine />
  //     </button>
    
  //   </div>
  // </form>
  // </Container>
  );
}

export default Signin;