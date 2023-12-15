import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6FLFby_a2O-xOsRry8dUrCz3Joq-V07I",
  authDomain: "horizon-ecommerce-aed90.firebaseapp.com",
  projectId: "horizon-ecommerce-aed90",
  storageBucket: "horizon-ecommerce-aed90.appspot.com",
  messagingSenderId: "487256125178",
  appId: "1:487256125178:web:90b96684107e973d0a2343",
  measurementId: "G-7ZNR1QF3ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db=firestore();
// export const firestorage=storage();
export const googleProvider=new GoogleAuthProvider();
export const facebookProvider=new FacebookAuthProvider();