// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDI03In2AvqurKNLVE7QksVKq75k4QMzF0',
  authDomain: 'crwn-clothing-db-6cd8a.firebaseapp.com',
  projectId: 'crwn-clothing-db-6cd8a',
  storageBucket: 'crwn-clothing-db-6cd8a.firebasestorage.app',
  messagingSenderId: '342135739290',
  appId: '1:342135739290:web:0f6eb1ba2ab1234101e023',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (error) {
      console.log('error creating the user', error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
