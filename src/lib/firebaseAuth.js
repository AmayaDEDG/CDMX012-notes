import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth, provider } from './firebaseConfig';

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential)
    }).catch((error) => {
        console.log(error)
    })
}

export const Logout = () => {
    signOut(auth).then(() => {
      console.log('Sign-out successful.')
    }).catch((error) => {
      console.log(error)
    });
  }