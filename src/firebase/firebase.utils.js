import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhtQy3crNor84TXup_xOqwuHuAwq33IBs",
  authDomain: "e-commerce-a8705.firebaseapp.com",
  databaseURL: "https://e-commerce-a8705.firebaseio.com",
  projectId: "e-commerce-a8705",
  storageBucket: "e-commerce-a8705.appspot.com",
  messagingSenderId: "865656347013",
  appId: "1:865656347013:web:8eaa5323c02839e3564cec",
  measurementId: "G-9BV64Y20BM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
