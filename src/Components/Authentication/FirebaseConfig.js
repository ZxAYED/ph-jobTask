// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDTBd0DALCA-HBynAOaKpDmTE612OAyFI",
  authDomain: "taskguard-pro.firebaseapp.com",
  projectId: "taskguard-pro",
  storageBucket: "taskguard-pro.appspot.com",
  messagingSenderId: "110138832906",
  appId: "1:110138832906:web:7c36dbdcbc87668282c7f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);