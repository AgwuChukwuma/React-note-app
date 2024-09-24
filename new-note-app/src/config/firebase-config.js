// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATqCJN2TpnGw7Drlyyj3ZQWYcCq58U7Lo",
  authDomain: "updated-note.firebaseapp.com",
  projectId: "updated-note",
  storageBucket: "updated-note.appspot.com",
  messagingSenderId: "252456792562",
  appId: "1:252456792562:web:35c2a40916cdf37511bb6b",
  measurementId: "G-CLD019DKYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);