import React from 'react';
import '../stylesheets/Notes.css';
import { useNavigate } from 'react-router-dom';


function Notes({ id, title, text, tag }) {
  const navigate = useNavigate()
  return (
    <article 
    className='note-container' 
    onClick={() => navigate(`/note/:${id}`)}>
      <section className='note-input'>
        <h2 className='note-title'><strong>{title}</strong></h2>
        <p className='note-text'>{text}</p>
        <p className='note-tag'>#{tag}</p>
      </section>
      {/* <section className='note-options'>
        (icono tres puntos)
      </section> */}
    </article>
  );
}

export default Notes;