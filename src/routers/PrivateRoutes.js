import { Route, Routes } from 'react-router-dom';
import Note from '../components/Note';
import Create from '../components/Create';
import Home from '../components/Home';
import Base from '../components/Base';
import { logout } from '../lib/firebaseAuth.js'
// import { BrowserRouter as Router } from "react-router-dom";


const PrivateRoutes = () => {
  return (
    <>
      {/* <Router> */}
        <Base logout={logout} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/note' element={<Note />} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default PrivateRoutes