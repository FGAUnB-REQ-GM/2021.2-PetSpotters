// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHzo7Zoq4immU5VU1LPuYYjhSkrgum3OE",
  authDomain: "pet-spotter.firebaseapp.com",
  projectId: "pet-spotter",
  storageBucket: "pet-spotter.appspot.com",
  messagingSenderId: "547091297848",
  appId: "1:547091297848:web:201a379405eb5a488f18cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
