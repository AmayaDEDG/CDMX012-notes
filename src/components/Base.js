import React from 'react';
import '../stylesheets/Base.css';
import { useNavigate } from 'react-router';

function Base({ logout, setDarkMode, darkMode }) {
  const navigate = useNavigate();
  return (
    <>
      <header className='fixed-items'>
        <img
          className='logo-light'
          alt={darkMode ? 'Kimind logo dark mode' : 'Kimind logo light mode'}
          src={darkMode ? require('../icons/logo-home-light.png') : require('../icons/logo-home-dark.png')}
        />
        <img
          className='mode-icon icon'
          alt='Moon icon that activates dark mode'
          src={darkMode ? require('../icons/light-mode.png') : require('../icons/dark-mode.png')}
          onClick={() => setDarkMode((previousMode) => !previousMode)}
        />
        <section className='menu-bar'>
          <img
            className='add-icon icon'
            alt='Add icon'
            src={darkMode ? require('../icons/add-light.png') : require('../icons/add-dark.png')}
            onClick={() => navigate('/create')}
          />
          <img
            className='search-icon icon'
            alt='Search icon'
            src={darkMode ? require('../icons/search-light.png') : require('../icons/search-dark.png')}
          />
          <img
            className='logout-icon icon'
            alt='Logout icon'
            src={darkMode ? require('../icons/logout-light.png') : require('../icons/logout-dark.png')}
            onClick={logout}
          />
        </section>
      </header>
      <section className='notes-space'></section>
    </>
  );
}

export default Base;