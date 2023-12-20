import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB6FLFby_a2O-xOsRry8dUrCz3Joq-V07I",
  authDomain: "horizon-ecommerce-aed90.firebaseapp.com",
  projectId: "horizon-ecommerce-aed90",
  storageBucket: "horizon-ecommerce-aed90.appspot.com",
  messagingSenderId: "487256125178",
  appId: "1:487256125178:web:2c58abdaa0dd4f8e0a2343",
  measurementId: "G-4V0KY9V5C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
export const googleProvider=new GoogleAuthProvider();
export const facebookProvider=new FacebookAuthProvider();