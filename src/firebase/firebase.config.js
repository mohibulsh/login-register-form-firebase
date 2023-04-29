// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkSgXN1M9ZgZ5eHKynJz5C2rl8I4HfziQ",
  authDomain: "react-context-tailwind.firebaseapp.com",
  projectId: "react-context-tailwind",
  storageBucket: "react-context-tailwind.appspot.com",
  messagingSenderId: "25749390646",
  appId: "1:25749390646:web:98861bca9355a02e979f97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;