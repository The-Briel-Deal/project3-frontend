import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHGoysVa6tjvpogd6VTS1S7pklo6uZxZ4",
  authDomain: "pipiopi-project.firebaseapp.com",
  projectId: "pipiopi-project",
  storageBucket: "pipiopi-project.appspot.com",
  messagingSenderId: "408431027309",
  appId: "1:408431027309:web:f8c12b58bac4df8e408b64",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const login = () => {
  return auth.signInWithPopup(provider);
};

const logout = () => {
  return auth.signOut();
};

export { auth, login, logout };
