// Import the functions you need from the SDKs y
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {firebaseConfig} from './config';

export const app = initializeApp (firebaseConfig);
// export const db = getFirestore (app);
