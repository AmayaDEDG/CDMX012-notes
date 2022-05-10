import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { app } from './firebaseConfig';

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential)
    }).catch((error) => {
        console.log(error)
    })
}

export const logout = () => {
    signOut(auth).then(() => {
      console.log('Sign-out successful.')
    }).catch((error) => {
      console.log(error)
    });
  }