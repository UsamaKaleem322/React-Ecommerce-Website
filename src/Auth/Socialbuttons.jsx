import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { auth, googleProvider, facebookProvider } from '../Firebase/Firebase-config';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const Socialbuttons = () => {
  
  const navigate = useNavigate()
    const SigninWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider)
         localStorage.setItem('user',JSON.stringify(auth.currentUser) )
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
  localStorage.setItem('user', JSON.stringify(auth.currentUser))
    
  return (
    <>
    <div className="socialbuttons d-flex gap-3 justify-content-center">
      <button className='btn btn-sm ' onClick={()=>SigninWithGoogle()} style={{backgroundColor:'red',color:"white",borderRadius:'50px'}}><FaGoogle style={{ fontSize: '23px' }} /></button>
      <button className='btn btn-sm' style={{backgroundColor:'blue',color:"white",borderRadius:'100px' , }}><FaFacebookF onClick={()=>SigninWithFacebook()} style={{ fontSize: '23px' }} /></button>
      </div>
    </>
  )
}

export default Socialbuttons