import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: "AIzaSyBwrNkLQvVWBTW_PDAvrKJN9rhUpUsg7T4",
    authDomain: "tiktok---jornada-185ab.firebaseapp.com",
    projectId: "tiktok---jornada-185ab",
    storageBucket: "tiktok---jornada-185ab.appspot.com",
    messagingSenderId: "672449184832",
    appId: "1:672449184832:web:87634c26f668c5b3b84ba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;