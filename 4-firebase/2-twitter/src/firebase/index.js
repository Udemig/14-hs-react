// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcRDtMAE-j-4uM9Xl4K2Vb-m-waYlkPKg",
  authDomain: "hs-twitter-aef02.firebaseapp.com",
  projectId: "hs-twitter-aef02",
  storageBucket: "hs-twitter-aef02.firebasestorage.app",
  messagingSenderId: "14895350569",
  appId: "1:14895350569:web:c6265d511c1ce040666d38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlayıcının kurulumunu yap
export const provider = new GoogleAuthProvider();

// firestore db referansını al
export const db = getFirestore(app);

// storage'ın referansını al
export const storage = getStorage(app);
