// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//For Auth
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC--fdtfE_QZNG3X51RNUCUUn4gwAjvJyM",
  authDomain: "adadaadaddaa-36e34.firebaseapp.com",
  projectId: "adadaadaddaa-36e34",
  storageBucket: "adadaadaddaa-36e34.appspot.com",
  messagingSenderId: "651085874699",
  appId: "1:651085874699:web:6856ae6c26113e8a13290e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {app,auth};