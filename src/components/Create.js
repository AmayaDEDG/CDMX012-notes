import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Create.css';
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../lib/firebaseConfig'

function Create({ darkMode }) {
  const navigate = useNavigate()

  const [title, setTtitle] = useState('')
  const [text, setText] = useState('')
  const [tag, setTag] = useState('')

  const handleTitle = e => {
    setTtitle(e.target.value)
  }
  const handleText = e => {
    setText(e.target.value)
  }
  const handleTag = e => {
    setTag(e.target.value)
  }

  const notesCollectionRef = collection(db, 'notes')
  const createNote = async () => {
    await addDoc(notesCollectionRef, { title, text, tag })
    navigate('/')
  }

  return (
    <section className='create-container'>
      <article className='create-note-container'>
        <section className='note-input'>
          <img
            className='back-icon'
            alt='Back icon that returns to last pagee'
            src={require('../icons/back-icon.png')}
            onClick={() => navigate(-1)}
          />
          <input
            className='note-input-title'
            type='text'
            placeholder='Título...'
            name='inputTitle'
            onChange={handleTitle}
          />
          <textarea className='note-input-text'
            placeholder='Texto...'
            name='inputText'
            cols='80'
            rows='10'
            onChange={handleText} >
          </textarea>
          {/* <p>#</p> */}
          <input
            className='note-input-tag'
            type='text'
            placeholder='Etiqueta...'
            name='inputTag'
            onChange={handleTag}
          />
          <img
            className='accept-icon create'
            alt='Accept icon that activates the creation of the note'
            src={darkMode ? require('../icons/accept-light.png') : require('../icons/accept-dark.png')}
            onClick={createNote}
          />
        </section>
      </article>
    </section>
  );
}

export default Create;