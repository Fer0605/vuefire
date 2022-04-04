import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let fireConfig = {
    apiKey: "AIzaSyCsdeU_Er61pkyDHMmBUTrU2aJ7DJLCzkg",
    authDomain: "nameprice-2aa7e.firebaseapp.com",
    projectId: "nameprice-2aa7e",
    storageBucket: "nameprice-2aa7e.appspot.com",
    messagingSenderId: "793457968274",
    appId: "1:793457968274:web:b94b2b3aaa8583fbe8524b",
    measurementId: "G-V3C9M62J3F"
};

firebase.initializeApp(fireConfig);

export const db = firebase.firestore();