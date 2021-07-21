import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxIf05nclkYrGtOIyVGvko7Pm7ekoFR40",
  authDomain: "netflix-71c1f.firebaseapp.com",
  databaseURL: "https://netflix-71c1f-default-rtdb.firebaseio.com",
  projectId: "netflix-71c1f",
  storageBucket: "netflix-71c1f.appspot.com",
  messagingSenderId: "946429225139",
  appId: "1:946429225139:web:751263a69a7d34fddda8c6",
});

const auth = firebase.auth();

export { auth };
export { firebaseApp };
