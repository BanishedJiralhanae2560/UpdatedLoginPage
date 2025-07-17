import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js';
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC95VISo-J__81sVwcYVU8so4wmcp_gUBo",
    authDomain: "studyproject-77bbc.firebaseapp.com",
    databaseURL: "https://studyproject-77bbc-default-rtdb.firebaseio.com",
    projectId: "studyproject-77bbc",
    storageBucket: "studyproject-77bbc.firebasestorage.app",
    messagingSenderId: "623319828388",
    appId: "1:623319828388:web:3c0f2ffc3b5906dcbf6331",
    measurementId: "G-TJG36SRS7X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
    auth, 
    onAuthStateChanged, 
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    ref, 
    set, 
    push, 
    get, 
    child,
    collection, 
    addDoc, 
    getDocs, 
    getDoc,
    doc, 
    updateDoc 
};