import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router';
import '../stylesheets/Login.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';
import { DarkMode } from './DarkMode';

export function Login({ setIsAuth, isAuth }) {
  const navigate = useNavigate();
  
  useLayoutEffect(() =>{
    setIsAuth(false)
  }, [setIsAuth])
  console.log(isAuth)
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }
  
  return (
    <>
      <section className='container-login'>
        <DarkMode />
        <img
          className='logo-login'
          alt='Kimind logo light mode'
          src={require('../icons/logo-light-mode.png')}
        />
        <p className='login-text'>Inicia sesión con</p>
        <img
          className='google-logo'
          alt='Google logo'
          src={require('../icons/google-logo.png')}
          onClick={signInWithGoogle}
        />
      </section>
    </>
  );
}

