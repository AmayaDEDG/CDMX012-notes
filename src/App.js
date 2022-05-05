import './App.css';
import AppRouter from './routers/AppRouter';

function App() {
      // const [isAuth, setIsAuth] = useState(false)

  return (
    // <ThemeProvider>
    //   {isAuth ? (<Base setIsAuth={setIsAuth}/>) : null}
      // <Routes>
      //   <Route exact path='/login' element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />} />
      //   <Route exact path='/' element={<PrivateRoute isAuth={isAuth} />}>
      //     <Route exact path='/' element={<Home />} />
      //     <Route exact path='/create' element={<Create />} />
      //     <Route exact path='/single-note' element={<SingleNote />} />
      //     <Route exact path='/edit' element={<Edit />} />
      //   </Route>
      // </Routes>
    
      <AppRouter />
    // </ThemeProvider>
  );
}

export default App;
