import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3IU8PrgibAEJ0kJrohRDIl7DL-kRb20c",
  authDomain: "careerzo.firebaseapp.com",
  projectId: "careerzo",
  storageBucket: "careerzo.appspot.com",
  messagingSenderId: "108626841772",
  appId: "1:108626841772:web:1c59a7ffc4df25e5c34f09",
  measurementId: "G-EVZFC7Y61T"
};

// Initialize Firebase
const firebase1 = firebase.initializeApp(firebaseConfig);

export default firebase1;