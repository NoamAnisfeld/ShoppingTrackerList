// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJptC50o6wEM930XwPw35feaZfJgmzbWA",
  authDomain: "shoppingtracker-25fd8.firebaseapp.com",
  projectId: "shoppingtracker-25fd8",
  storageBucket: "shoppingtracker-25fd8.appspot.com",
  messagingSenderId: "1048582108304",
  appId: "1:1048582108304:web:50c6397a27783de681d415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
