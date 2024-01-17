// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADq-Yap4WnOBdPIuXR7U6uAJg-PmKJtFM",
  authDomain: "telegram-9dcd2.firebaseapp.com",
  projectId: "telegram-9dcd2",
  storageBucket: "telegram-9dcd2.appspot.com",
  messagingSenderId: "383639662377",
  appId: "1:383639662377:web:a2acb73406ba70b2319138",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
