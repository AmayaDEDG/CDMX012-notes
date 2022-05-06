import React from 'react';
import '../stylesheets/Base.css';
import { useNavigate } from 'react-router';

function Base({ logout }) {
  const navigate = useNavigate();

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
            onClick={() => navigate('/create')}
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
            onClick={logout}
          />
        </section>
      </header>
      <section className='notes-space'></section>
    </>
  );
}

export default Base;