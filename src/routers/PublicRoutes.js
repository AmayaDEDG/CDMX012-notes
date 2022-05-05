import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/Login"

const PublicRoutes = ({ isAuth, setIsAuth }) => {
    console.log(isAuth)
    return (
        <Routes>
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='*' element={<Navigate to='/login' replace />} />
        </Routes>
    )
}

export default PublicRoutes