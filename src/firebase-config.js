
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAvaasDjZJ17SvehXxLzbyB3cyxE-gW_wc",
  authDomain: "cursosmate-d67b6.firebaseapp.com",
  projectId: "cursosmate-d67b6",
  storageBucket: "cursosmate-d67b6.appspot.com",
  messagingSenderId: "493570166321",
  appId: "1:493570166321:web:b6ff34b9734d719d83cf10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}