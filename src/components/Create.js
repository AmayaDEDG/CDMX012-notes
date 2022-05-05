import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/Create.css';
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../lib/firebaseConfig'

function Create(props) {
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

  // const handleSubmit = e => {
  //   e.preventDefault()

  //   const newNote = {
  //     title: title,
  //     text: text,
  //     tag: tag
  //   }

  //   props.onSubmit(newNote)

  //   navigate('/')
  // }
  const notesCollectionRef = collection(db, 'notes')
  const createNote = async () =>{
    await addDoc(notesCollectionRef, { title, text, tag })
    navigate('/')
  }

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
          onChange={handleTitle}
          />
          <input 
          className='note-input-text'
          type='text'
          placeholder='Texto...'
          name='inputText' 
          onChange={handleText} 
          />
          <input 
          className='note-input-tag'
          type='text'
          placeholder='Etiqueta...'
          name='inputTag'
          onChange={handleTag}  
          />
          <button className='create-btn' onClick={createNote}>Agregar nota</button>
        </div>
      </article>
    </section>
  );
}

export default Create;