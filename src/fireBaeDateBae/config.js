import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTe0ImyJUEyuyloLwOaapTge1n06b8Uhk",
  authDomain: "loanlender-48895.firebaseapp.com",
  projectId: "loanlender-48895",
  storageBucket: "loanlender-48895.appspot.com",
  messagingSenderId: "1032474568407",
  appId: "1:1032474568407:web:3adf755bb66f34134c3292",
};

firebase.initializeApp(firebaseConfig);

const fireStore = firebase.firestore();
const auth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { fireStore, auth, timestamp };
