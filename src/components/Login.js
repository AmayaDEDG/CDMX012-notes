import React from 'react';
import '../stylesheets/Login.css';
import { DarkMode } from './DarkMode';

export function Login({ signInWithGoogle }) {
  return (
    <>
      <section className='container-login'>
        <DarkMode />
        <img
          className='logo-login'
          alt='Kimind logo light mode'
          src={require('../icons/logo-light-mode.png')}
        />
        <p
          className='login-text'>
          Inicia sesión con
        </p>
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

