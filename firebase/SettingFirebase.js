// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDitqX-2cptNGEbs3XMqwey4t8suRpK1Lw",
  authDomain: "tgb-app-e24e1.firebaseapp.com",
  projectId: "tgb-app-e24e1",
  storageBucket: "tgb-app-e24e1.appspot.com",
  messagingSenderId: "119516132084",
  appId: "1:119516132084:web:3831395b00272e2c29a4a1",
  measurementId: "G-Y9ZG0RCZSG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// if (!firebase.getApps.length) {
//   firebase.initializeApp(firebaseConfig);
//   }

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
