// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWFbQ1hWLs2hslpUs1quyBRy66E7FYY9o",
  authDomain: "fir-practice-79581.firebaseapp.com",
  projectId: "fir-practice-79581",
  storageBucket: "fir-practice-79581.firebasestorage.app",
  messagingSenderId: "263963494162",
  appId: "1:263963494162:web:de27759a9a3139c5a095cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
