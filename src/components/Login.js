import React from 'react';
import '../stylesheets/Login.css';

export function Login({ signInWithGoogle, setDarkMode, darkMode }) {
  return (
    <div className='login'>
      <section className='container-login'>
        <img
          className='mode-login'
          alt='Moon icon that activates dark mode'
          src={darkMode ? require('../icons/light-mode.png') : require('../icons/dark-mode.png')}
          onClick={() => setDarkMode((previousMode) => !previousMode)}
        />
        <img
          className='logo-login'
          alt='Kimind logo light mode'
          src={darkMode ? require('../icons/logo-dark-mode.png') : require('../icons/logo-light-mode.png')}
        />
        <p
          className='login-text'>
          Inicia sesión con
        </p>
        <img
          className='google-logo'
          alt='Google logo'
          src={darkMode ? require('../icons/google-logo-dark.png') : require('../icons/google-logo-light.png')}
          onClick={signInWithGoogle}
        />
      </section>
    </div>
  );
}

