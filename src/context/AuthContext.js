// import { createContext, useContext, useState, useEffect } from 'react';
// import { signInWithPopup, signOut, onAuthStateChanged, getAuth } from 'firebase/auth';
// import { auth, provider } from '../firebaseConfig';

// export const AuthContext = createContext();

// export const AuthContextProvider = props => {
//   const [user, setUser] = useState()
//   const [error, setError] = useState()
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
//     return () => unsubscribe()
//   }, [])
//   return <AuthContext.Provider value={{ user, error }} {...props} />
// }

// export const useAuthState = () => {
//   const auth = useContext(AuthContext)
//   return { ...auth, isAuthenticated: auth.user != null }
// }

// export const signInWithGoogle = async () => {
//   await signInWithPopup(auth, provider)
//    .then((result) => {
//      // const name = result.user.displayName;
//      // const email = result.user.email;

//      // localStorage.setItem("name", name);
//      // localStorage.setItem("email", email);
//      console.log(result);
//      console.log(result.user);
//    })
//    .catch((error) => {
//      console.log(error);
//    });
// }

// export function signOutFunction(setIsAuth) {
//  signOut(auth).then(() => {
//    localStorage.clear()
//    setIsAuth = false
//    window.location.pathname='/login'
//    console.log('Sign-out successful.')
//  }).catch((error) => {
//   console.log(error)
//  });
// }
