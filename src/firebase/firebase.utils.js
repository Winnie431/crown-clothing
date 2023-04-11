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

  export const createUserProfileDocument = async (userAuth,additionalData)  => {
    //cheking that we get a valid user auth ie the user actually signed in
    if(!userAuth) return ;

    //if signed in, we query firestore to verify that the doc already exist
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      //we see what we are actually going to store
      const {displayName, email} = userAuth;
      //when was the user uthenticated

      const creatAt = new Date();

      //create the user in firestore database
      try{
        await userRef.set({
          displayName,
          email,
          creatAt,
          ...additionalData
        })

      }catch(error){
    console.log("error creating user", error.message);

      }
    }
    return userRef;
    //console.log(snapShot);
  }

  


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'}); //
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 