// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcCPSyxF12kOw1blTf4-6GVGFRoRKc3Tk",
  authDomain: "luxury-living22.firebaseapp.com",
  projectId: "luxury-living22",
  storageBucket: "luxury-living22.appspot.com",
  messagingSenderId: "842414811707",
  appId: "1:842414811707:web:6bceb430dd14d09ab38a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;