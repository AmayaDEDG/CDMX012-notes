import { Route, Routes } from 'react-router-dom';
import Note from '../components/Note';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Home from '../components/Home';
import Base from '../components/Base';
import { logout } from '../lib/firebaseAuth.js'

const PrivateRoutes = () => {
  return (
    <>
      <Base logout={logout} />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/create' element={<Create />} />
        <Route  path='/note' element={<Note />} />
        <Route  path='/edit' element={<Edit />} />
      </Routes>
    </>
  )
}

export default PrivateRoutes