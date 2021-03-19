

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBrzApNDoNyLcxzGVay323UzkgmAfb7-uY",
    authDomain: "todo-app-50f1f.firebaseapp.com",
    projectId: "todo-app-50f1f",
    storageBucket: "todo-app-50f1f.appspot.com",
    messagingSenderId: "63969436898",
    appId: "1:63969436898:web:47b6bb92926e2a040eaabb",
    measurementId: "G-DSF73D2P91"
});

const db = firebaseApp.firestore();

export default db
