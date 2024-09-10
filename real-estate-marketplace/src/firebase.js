// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d5ddb.firebaseapp.com",
  projectId: "mern-estate-d5ddb",
  storageBucket: "mern-estate-d5ddb.appspot.com",
  messagingSenderId: "587320662466",
  appId: "1:587320662466:web:a66f4b10002c9d3b399e5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);