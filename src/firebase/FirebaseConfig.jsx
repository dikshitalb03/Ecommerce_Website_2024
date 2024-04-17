// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfFJsMwIaQTkoEMnGEKrm9L4GCbeJHEc",
  authDomain: "sartha-c3616.firebaseapp.com",
  projectId: "sartha-c3616",
  storageBucket: "sartha-c3616.appspot.com",
  messagingSenderId: "1092829771912",
  appId: "1:1092829771912:web:3bd9452ab35f2436dc473d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export {auth , fireDB}