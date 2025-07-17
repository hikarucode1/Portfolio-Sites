// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAprxX2-TDflQZ5cEhH7cRmmF3dhl1wtJU",
  authDomain: "portforiosite-a9b49.firebaseapp.com",
  projectId: "portforiosite-a9b49",
  storageBucket: "portforiosite-a9b49.firebasestorage.app",
  messagingSenderId: "843813843333",
  appId: "1:843813843333:web:0d3ba275dcee33c88c14ec",
  measurementId: "G-3H2HPLCBSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);