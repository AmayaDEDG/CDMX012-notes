import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Note() {

  return (
    <section className='create-container'>
      <article className='create-note-container'>
        <Link to='/'>Home</Link>
        <div className='note-input'>
          <input 
          className='note-input-title'
          type='text'
          placeholder='Título...'
          name='inputTitle' 
          // onChange={handleTitle}
          />
          <input 
          className='note-input-text'
          type='text'
          placeholder='Texto...'
          name='inputText' 
          // onChange={handleText} 
          />
          <input 
          className='note-input-tag'
          type='text'
          placeholder='Etiqueta...'
          name='inputTag'
          // onChange={handleTag}  
          />
          <button className='create-btn'>Aceptar</button>
        </div>
      </article>
    </section>
  );
}

export default Note;