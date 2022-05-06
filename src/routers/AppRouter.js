import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes  from "./PublicRoutes"

const AppRouter = ({isAuth}) => {

  return (
    <>
      {
        isAuth ?
          <PrivateRoutes /> :
          <PublicRoutes />
      }
    </>
  )
}

export default AppRouter