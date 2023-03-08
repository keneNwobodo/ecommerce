// Import the functions you need from the SDKs y
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {firebaseConfig} from './config';

const app = initializeApp (firebaseConfig);
export const auth = getAuth (app);
export const db = getFirestore (app);

const GoogleProvider = new GoogleAuthProvider ();

// Add custom providers
GoogleProvider.setCustomParameters ({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup (auth, GoogleProvider);

export const handleUserProfile = async (user, data) => {
  if (!user) return;

  const {uid, displayName, email} = auth.currentUser;

  try {
    await addDoc (collection (db, `users/${uid}`), {
      displayName,
      email,
      createdAt: serverTimestamp (),
      ...data,
    });
  } catch (err) {
    console.log (err + 'FAILED!!!');
  }
};
