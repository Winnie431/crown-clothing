import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyCMPQcXxZFGW-h73iaQUBohrJ6Sw8ng11A",
    authDomain: "crown-clothing-db-88af1.firebaseapp.com",
    projectId: "crown-clothing-db-88af1",
    storageBucket: "crown-clothing-db-88af1.appspot.com",
    messagingSenderId: "946908988488",
    appId: "1:946908988488:web:750cb63db26fb5c880447d",
    measurementId: "G-Z226BXHRQ4"
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'}); //
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 