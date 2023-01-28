// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-A5Mev7uCVP3-D58WvWst6EhJefBdF88",
  authDomain: "luxury-living-c681b.firebaseapp.com",
  projectId: "luxury-living-c681b",
  storageBucket: "luxury-living-c681b.appspot.com",
  messagingSenderId: "590789751636",
  appId: "1:590789751636:web:d7eba8119bcdb635c48ec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;