// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMaIQTYQY46rgeasnRMO_QHxnL3Quqjjg",
  authDomain: "hs-chat-cc2a4.firebaseapp.com",
  projectId: "hs-chat-cc2a4",
  storageBucket: "hs-chat-cc2a4.firebasestorage.app",
  messagingSenderId: "971989398779",
  appId: "1:971989398779:web:e43b302f30a9d8a5a3ac5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth servisinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();
