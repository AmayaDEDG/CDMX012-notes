import { Route, Routes } from 'react-router-dom';
import Note from '../components/Note';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Home from '../components/Home';
import Base from '../components/Base';


        // isAuth ? <Outlet /> : <Navigate to='/login' />

const PrivateRoutes = () => {
  return (
    <>
      <Base />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/note' element={<Note />} />
        <Route exact path='/edit' element={<Edit />} />
      </Routes>
    </>
  )
}

export default PrivateRoutes