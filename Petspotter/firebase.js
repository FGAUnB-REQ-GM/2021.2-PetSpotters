// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARfb7AP-aozgv6_rkyNHI5qi4YUVWMNAs",
  authDomain: "pet-spotters.firebaseapp.com",
  projectId: "pet-spotters",
  storageBucket: "pet-spotters.appspot.com",
  messagingSenderId: "119195888955",
  appId: "1:119195888955:web:38b49d02c2a7f95611db1e",
  measurementId: "G-E3V4Y18DEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
