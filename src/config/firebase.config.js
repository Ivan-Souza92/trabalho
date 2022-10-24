import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCSYNaGoq36CO7p7ecP2yRhYE_4UhrnlD4",
    authDomain: "projeto-firebase-a8f0b.firebaseapp.com",
    projectId: "projeto-firebase-a8f0b",
    storageBucket: "projeto-firebase-a8f0b.appspot.com",
    messagingSenderId: "1037480206697",
    appId: "1:1037480206697:web:18ffc3c0744ec9bb6cddf8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
