// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1LGwWmYX0RrdHTQmLoWSAylaWoL_t22c",
  authDomain: "clone-a3913.firebaseapp.com",
  projectId: "clone-a3913",
  storageBucket: "clone-a3913.appspot.com",
  messagingSenderId: "361359213068",
  appId: "1:361359213068:web:808240b1ab088a22596429",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
