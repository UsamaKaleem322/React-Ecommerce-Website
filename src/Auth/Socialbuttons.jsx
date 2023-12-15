import React from 'react'
import Button from 'react-bootstrap/Button';
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { auth, googleProvider, facebookProvider } from '../Firebase/Firebase-config';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
const Socialbuttons = () => {
  const navigate = useNavigate()
  const SigninWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }
  const SigninWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Button className='pb-2 border ' style={{ background: '#E52727' }} onClick={() => SigninWithGoogle()}><FaGoogle style={{ fontSize: '21px' }} /> Sign In with Google</Button>
      <Button className='pb-2' onClick={() => SigninWithFacebook()}><RiFacebookBoxLine style={{ fontSize: '25px' }} /> Sign In with Facebook</Button>
      <Button className='pb-2 btn-dark'><FaGithub style={{ fontSize: '23px' }} /> Sign In with Github</Button>
    </>
  )
}

export default Socialbuttons