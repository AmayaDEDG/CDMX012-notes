import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"
import { signInWithGoogle } from '../lib/firebaseAuth.js'


const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login signInWithGoogle={signInWithGoogle} />} />
            {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
    )
}

export default PublicRoutes