import React from 'react';
import '../stylesheets/Base.css';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Base({ setIsAuth }) {
  const navigate = useNavigate();
  
  const callCreatePage = () => {
    setIsAuth = true
    navigate('/create')
  }
  
  const Logout = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth = false
      window.location.pathname = '/login'
      console.log('Sign-out successful.')
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <>
      <header className='fixed-items'>
        <img
          className='logo-light'
          alt='Kimind logo light mode'
          src={require('../icons/logo-home-dark.png')}
        />
        <img
          className='mode-icon icon'
          alt='Moon icon that activates dark mode'
          src={require('../icons/dark-mode.png')}
        />
        <section className='menu-bar'>
          <img
            className='add-icon icon'
            alt='Add icon'
            src={require('../icons/add-dark.png')}
            onClick={callCreatePage}
          />
          <img
            className='search-icon icon'
            alt='Search icon'
            src={require('../icons/search-dark.png')}
          />
          <img
            className='logout-icon icon'
            alt='Logout icon'
            src={require('../icons/logout-dark.png')}
            onClick={Logout}
          />
        </section>
      </header>
      <section className='notes-space'></section>
    </>
  );
}

export default Base;