import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"
import { signInWithGoogle } from '../lib/firebaseAuth.js'


const PublicRoutes = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <section className={`${darkMode && 'dark-mode'}`}>
            <Routes>
                <Route path='/' element={<Login signInWithGoogle={signInWithGoogle} setDarkMode={setDarkMode} darkMode={darkMode} />} />
                {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
            </Routes>
        </section>
    )
}

export default PublicRoutes