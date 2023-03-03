
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAh4htoHsUzNd89k0yHARUTfUQ00rQyOIQ",
  authDomain: "proyecto4-616d2.firebaseapp.com",
  projectId: "proyecto4-616d2",
  storageBucket: "proyecto4-616d2.appspot.com",
  messagingSenderId: "603740174791",
  appId: "1:603740174791:web:4475e1794a2a03e8ff81e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
