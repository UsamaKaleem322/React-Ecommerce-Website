import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth'
import Socialbuttons from '../Socialbuttons';
import React from 'react';
import '../style.css'

function Signin() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
      await signInWithEmailAndPassword(auth, email, password)
      navigate(-1)
  }

  return (
    <div className='banner1'>
      <div className="overlay2">
      <Row className='login pb-5'>
        <Col >
          <h3 className='mt-3'>Sign In First</h3>
          <form className='pe-3' onSubmit={e => handleSubmit(e)}>
            <input type="email" name='email' required className='form-control my-4' placeholder='Email....' />
            <input type="password" minLength={6} name='password' required className='form-control my-4' placeholder='Password....' />
            <button className='btn  btn-dark  mt-3'>Sign In</button>
          </form>
        </Col>

      </Row>
      <Row className='signup-bar py-3'>
        <Col className='d-flex justify-content-between'>
          <Socialbuttons />
          <Link to={'/signup'}>
            <button className='btn  btn-dark mx-3 mt-1'>Sign Up</button>
          </Link>

        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Signin;