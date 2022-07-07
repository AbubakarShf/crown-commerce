import { initializeApp } from "firebase/app";

import {
  getAuth, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8pE8DnbIYEOtYmxxxB0-70GEW92Pzc9U",
  authDomain: "crown-commerce-db-e2c72.firebaseapp.com",
  projectId: "crown-commerce-db-e2c72",
  storageBucket: "crown-commerce-db-e2c72.appspot.com",
  messagingSenderId: "214484849690",
  appId: "1:214484849690:web:da23e375ef7d6f06036da3",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// create a instance of GoogleAuthProvider
const provider= new GoogleAuthProvider();

// select_account from may google account
provider.setCustomParameters({
    prompt:'select_account'
});


export const auth=getAuth();

export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);



