import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth   , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import {getFirestore, collection, addDoc ,doc ,setDoc , getDoc , getDocs ,deleteDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAxttpk0EW57-VLzP6E_VTfIa7WKgqi_kE",
    authDomain: "foodappreactfirestore.firebaseapp.com",
    projectId: "foodappreactfirestore",
    storageBucket: "foodappreactfirestore.appspot.com",
    messagingSenderId: "758017740267",
    appId: "1:758017740267:web:a36e552a6a03161ba15dae",
    measurementId: "G-XNWMFWE3LJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
  getDocs,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteDoc
}