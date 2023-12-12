import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../style.css'
import Socialbuttons from '../Socialbuttons';
function Signup() {
   const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // const username=e.target.username.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    try {
     await createUserWithEmailAndPassword(auth,email,password)
     navigate('/')
    } catch (error) {
      if(error.message=='Firebase: Error (auth/email-already-in-use).'){
        alert('Email Allready exist')
      }
      else{
        alert('Invalid Email')
      }
      
    }
  }
  return (
    <Container>
      <Row className='login mt-5'>
        <Col xs={7}>
          <h3>Sign Up</h3>
          <form className='pe-3 my-5' onSubmit={e=>handleSubmit(e)}>
            <input type="text" name='username' className='form-control' required placeholder='Name....' />
            <input type="email" name='email' required className='form-control my-4' placeholder='Email....' />
            <input type="password" minLength={6} name='password' required className='form-control my-4' placeholder='Password....' />
            <button className='btn btn-dark ' style={{width:'auto'}}>Sign Up</button>
          </form>

        </Col>
        <Col xs={5} className='my-5'>
          <Socialbuttons/>
        </Col>
      </Row>
      <Row className='signup-bar'>
        <Col className='d-flex justify-content-center'>
          <p className='pt-2'>Have an account ? </p>
          <Link to={'/signin'}>
          <button className='btn  btn-outline-dark mx-3 mt-1'>Sign In</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;