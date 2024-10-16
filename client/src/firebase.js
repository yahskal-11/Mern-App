// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-app-8feca.firebaseapp.com",
  projectId: "mern-app-8feca",
  storageBucket: "mern-app-8feca.appspot.com",
  messagingSenderId: "866459213898",
  appId: "1:866459213898:web:4bd163d78ebf303f5fc6b3",
  measurementId: "G-N2G3698F9K"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
