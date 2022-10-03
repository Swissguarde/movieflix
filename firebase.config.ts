// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Dnrr102O-y7caaqnQrFPnCPpSUBaW0o",
  authDomain: "movieflix-73202.firebaseapp.com",
  projectId: "movieflix-73202",
  storageBucket: "movieflix-73202.appspot.com",
  messagingSenderId: "188517428368",
  appId: "1:188517428368:web:f3fa2209c4e7246c587c15",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
