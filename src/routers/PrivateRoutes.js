import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Note from '../components/Note';
import Create from '../components/Create';
import Home from '../components/Home';
import Base from '../components/Base';
import { logout } from '../lib/firebaseAuth.js'
// import { BrowserRouter as Router } from "react-router-dom";


const PrivateRoutes = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <section className={`${darkMode && 'dark-mode'}`}>
      {/* <Router> */}
        <Base logout={logout} setDarkMode={setDarkMode} darkMode={darkMode}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create darkMode={darkMode}/>} />
          <Route path='/note/:id' element={<Note darkMode={darkMode}/>} />
        </Routes>
      {/* </Router> */}
    </section>
  )
}

export default PrivateRoutes