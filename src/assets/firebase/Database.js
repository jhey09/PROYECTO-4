
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC3MMIt2zm7aOWQiQErbT4wRcLQececJO8",
  authDomain: "ejercicios-44dc8.firebaseapp.com",
  projectId: "ejercicios-44dc8",
  storageBucket: "ejercicios-44dc8.appspot.com",
  messagingSenderId: "576553834504",
  appId: "1:576553834504:web:973d13476ead90f1acd9bd",
  measurementId: "G-3Z6NY0B2X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
