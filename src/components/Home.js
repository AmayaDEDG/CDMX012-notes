import React, { useState, useEffect, useCallback } from 'react';
import Notes from './Notes';
import '../stylesheets/Home.css';
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../lib/firebaseConfig'

function Home() {
  const [notesList, setNotesList] = useState([])
  const notesCollectionRef = collection(db, 'notes')

  const getNotes = useCallback( async () =>{
    const data = await getDocs(notesCollectionRef)
    setNotesList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    getNotes()
    console.log('Firestore uso')
  },[getNotes])

  return (
    <div className='Home'>
      <nav>
      </nav> 
      <section className='notes-list'>
        { notesList.map((note) => 
          <Notes
            key={note.id}
            title={note.title}
            text={note.text}
            tag={note.tag}
           />
        )}
      </section>
    </div>
  );
}

export default Home;