// Import the functions you need from the SDKs y
import {initializeApp} from 'firebase/app';
import {doc, getFirestore} from 'firebase/firestore';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {firebaseConfig} from './config';
import {useRef} from 'react';

const app = initializeApp (firebaseConfig);
export const auth = getAuth (app);
export const db = getFirestore (app);

const GoogleProvider = new GoogleAuthProvider ();

// Add custom providers
GoogleProvider.setCustomParameters ({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup (auth, GoogleProvider);

export const handleUserProfile = async (user, data) => {
  if (!user) return;
  const {uid} = user;
  console.log (uid);

  const userRef = doc (`users/${uid}`);
  const snapshot = await userRef.get ();

  if (!snapshot.exist) {
    const {displayName, email} = user.currentUser;
    try {
      await useRef.set ({
        displayName,
        email,
        createdAt: serverTimestamp (),
        ...data,
      });
    } catch (err) {
      console.log (err + 'FAILED!!!');
    }
  }
  return userRef;
};
