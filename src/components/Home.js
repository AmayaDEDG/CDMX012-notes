import React, { useState, useEffect } from 'react';
import Notes from './Notes';
import '../stylesheets/Home.css';
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../lib/firebaseConfig'



function Home() {
  // const [notes, setNotes] = useState([]);

  // const addNote = note => {
  //   if (note.texto.trim()) {
  //     note.texto = note.texto.trim();
  //     const updatedNotes = [note, ...notes];
  //     setNotes(updatedNotes);
  //   }
  // }
  
  // <Create onSubmit={addNote} />
  //AQUI VA EL BUENO:
  // const [notesList, setNotesList] = useState([])
  // const notesCollectionRef = collection(db, 'notes')

  // useEffect(() => {
  //   const getNotes = async () => {
  //     const data = await getDocs(notesCollectionRef)
  //     setNotesList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }
  //   getNotes()
  // },[notesCollectionRef])

  
  return (
    <div className='Home'>
      {/* <Base /> */}
      <nav>
        {/* <Link to='/edit'>Edit</Link>
        <Link to='/note'>Single Note</Link> */}
      </nav> 
      <section className='notes-list'>
        {/* { notesList.map((note) => 
          <Notes
            key={note.id}
            title={note.title}
            text={note.text}
            tag={note.tag}
           />
        )} */}
        <Notes
            title='Jalaba lo juro'
            text='Fuente: ee creeme we'
            tag='#fuente: ovejuna'
           />
        <Notes
            title='Jejeje'
            text='Sigo aprendiendo'
            tag='#ggg'
           />
      </section>
     
    </div>
  );
}

export default Home;