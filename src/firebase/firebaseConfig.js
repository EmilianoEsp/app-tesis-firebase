import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOcMDA5PLHTZqvsuXfgrSLhesuMkYv1wA",
  authDomain: "app-tesis-28a05.firebaseapp.com",
  projectId: "app-tesis-28a05",
  storageBucket: "app-tesis-28a05.appspot.com",
  messagingSenderId: "809677864450",
  appId: "1:809677864450:web:be8c1a27f8be50a2f7b11b"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const store = fb.firestore();

export { auth, store }