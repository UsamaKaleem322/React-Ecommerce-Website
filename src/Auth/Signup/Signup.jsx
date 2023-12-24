import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase-config';
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import '../style.css'
import Socialbuttons from '../Socialbuttons';
function Signup() {
   const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const displayName=e.target.displayName.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    try {
     await createUserWithEmailAndPassword(auth,email,password)
     const user=auth.currentUser;
     if(!!user){
      updateProfile(user,{
        displayName
      })
     }
     navigate(-2)
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
    <div className='banner1'>
      <div className="overlay2">
      <Row className='login py-4'>
        <Col >
          <h3>Sign Up</h3>
          <form className='pe-3 my-3' onSubmit={e=>handleSubmit(e)}>
            <input type="text" name='displayName' className='form-control' required placeholder='Name....' />
            <input type="email" name='email' required className='form-control my-4' placeholder='Email....' />
            <input type="password" minLength={6} name='password' required className='form-control my-4' placeholder='Password....' />
            <button className='btn btn-dark ' style={{width:'auto'}}>Sign Up</button>
          </form>
        </Col>
      </Row>
      <Row className='signup-bar py-3'>
        <Col className='d-flex justify-content-between'>
          <Socialbuttons />
          <Link to={'/signin'}>
            <button className='btn  btn-dark  mt-1'>Sign In</button>
          </Link>

        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Signup;