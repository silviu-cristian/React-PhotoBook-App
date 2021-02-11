  
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBsK4XZ52TdW7mhqZlUgFgdBKocBBaq73Y",
  authDomain: "react-photobook-app-dev.firebaseapp.com",
  projectId: "react-photobook-app-dev",
  storageBucket: "react-photobook-app-dev.appspot.com",
  messagingSenderId: "862686108287",
  appId: "1:862686108287:web:5f42ed3001d8de20fcbd4a",
  measurementId: "G-KRR7CXH3X5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
