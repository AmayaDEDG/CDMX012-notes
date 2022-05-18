import { useState } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isAuth, setIsAuth] = useState(null)
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user)
    } else {
      setIsAuth(null)
    }
  });

  return (
    <section className='app'>
        {/* <ThemeProvider> */}
        <AppRouter isAuth={isAuth} />
        {/* </ThemeProvider> */}
    </section>
  );
}

export default App;
