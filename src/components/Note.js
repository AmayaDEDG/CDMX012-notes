import React, { useLayoutEffect, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../lib/firebaseConfig'
import { getDoc, collection, doc, updateDoc, deleteDoc } from 'firebase/firestore'


function Note({ darkMode }) {
  const navigate = useNavigate()
  const { id } = useParams()
  const newId = id.slice(1)
  const notesCollectionRef = collection(db, 'notes')

  const [title, setTtitle] = useState('')
  const [text, setText] = useState('')
  const [tag, setTag] = useState('')

  const getNote = useCallback(async () => {
    const note = doc(notesCollectionRef, newId)
    const data = await getDoc(note)

    setTtitle(data._document.data.value.mapValue.fields.title.stringValue)
    setText(data._document.data.value.mapValue.fields.text.stringValue)
    setTag(data._document.data.value.mapValue.fields.tag.stringValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useLayoutEffect(() => {
    getNote()
  }, [getNote])

  const [newTitle, setNewTtitle] = useState(title)
  const [newText, setNewText] = useState(text)
  const [newTag, setNewTag] = useState(tag)

  const handleTitle = e => {
    setNewTtitle(e.target.value)
  }
  const handleText = e => {
    setNewText(e.target.value)
  }
  const handleTag = e => {
    setNewTag(e.target.value)
  }

  const updateNote = async () => {
    const note = doc(notesCollectionRef, newId)
    await updateDoc(note, { title: newTitle, text: newText, tag: newTag })
    navigate('/')
  }

  const deleteNote = async () => {
    const note = doc(notesCollectionRef, newId)
    await deleteDoc(note)
    navigate('/')
  }

  return (
    <section className='create-container'>
      <article className='create-note-container'>
        <div className='note-input'>
          <img
            className='back-icon'
            alt='Back icon that returns to last pagee'
            src={require('../icons/back-icon.png')}
            onClick={() => navigate(-1)}
          />
          <input
            className='note-input-title'
            type='text'
            text='Título...'
            name='inputTitle'
            defaultValue={title}
            onChange={handleTitle}
          />
          <textarea
            className='note-input-text'
            placeholder='Texto...'
            name='inputText'
            defaultValue={text}
            rows='10'
            onChange={handleText}>
          </textarea>
          <input
            className='note-input-tag'
            type='text'
            placeholder='Etiqueta...'
            name='inputTag'
            defaultValue={tag}
            onChange={handleTag}
          />
          <img
            className='accept-icon'
            alt='Accept icon that saves the changes on the note'
            src={darkMode ? require('../icons/accept-light.png') : require('../icons/accept-dark.png')}
            onClick={updateNote}
          />
          <img
            className='delete-icon'
            alt='Delete icon that deletes the note'
            src={darkMode ? require('../icons/delete-light.png') : require('../icons/delete-dark.png')}
            onClick={deleteNote}
          />
        </div>
      </article>
    </section>
  );
}

export default Note;