
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDDmQEboYBGHJ0Ze-4mTWU_m3lWjLvEfAc",
    authDomain: "olx-clone-6f303.firebaseapp.com",
    projectId: "olx-clone-6f303",
    storageBucket: "olx-clone-6f303.firebasestorage.app",
    messagingSenderId: "321678007764",
    appId: "1:321678007764:web:b16839734b29b591a00a41",
    measurementId: "G-CDNRD52R6C"
  };


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;