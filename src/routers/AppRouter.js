import { useState } from "react"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes  from "./PublicRoutes"

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  return (
    <>
      {
        isAuth ?
          <PrivateRoutes /> :
          <PublicRoutes setIsAuth={setIsAuth} />
      }
    </>
  )
}

export default AppRouter